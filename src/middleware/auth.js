const ClientError = require('../utils/ClientError');
const ServerError = require('../utils/ServerError');
const User = require('../models/User');
const admin = require('../configs/firebase');
const shortid = require('shortid');

const auth = async (req, res, next) => {
    // Check header
    if (!req.headers.authorization) {
        req.user = null;
        return next();
    }
    const token = req.headers.authorization.split(' ')[1];

    let decodeValue;
    // verify token
    try {
        decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            const err = new ClientError('INVALID_TOKEN');
            return res.status(err.status).json({
                success: false,
                error: {
                    code: err.name,
                    message: err.message,
                },
            });
        }
    } catch (e) {
        const err = new ClientError('INVALID_TOKEN');
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }

    // Check user exist
    try {
        const checkUser = await User.findOne({ uid: decodeValue.uid });
        if (checkUser) {
            req.user = checkUser;
            return next();
        }
    } catch (e) {
        const err = new ServerError('INTERNAL_SERVER_ERROR', e);
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }

    // Create user
    try {
        const newUser = new User({
            uid: decodeValue.uid,
            displayName: decodeValue.name,
            username: shortid.generate(),
            avatar: decodeValue.picture,
            email: decodeValue.email,
            emailVerified: decodeValue.email_verified,
        });
        await newUser.save();
        req.user = newUser;
        return next();
    } catch (e) {
        const err = new ServerError('INTERNAL_SERVER_ERROR', e);
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }
};

module.exports = auth;
