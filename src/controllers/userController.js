const ClientError = require('../utils/ClientError');
const ServerError = require('../utils/ServerError');
const User = require('../models/User');
const admin = require('../configs/firebase');
const shortid = require('shortid');

//* [GET] api/user/:username

//* [POST] api/user
const create = async (req, res, next) => {
    if (!req.headers.authorization) {
        return next(new ClientError('INVALID_HEADER_AUTHORIZATION'));
    }
    const token = req.headers.authorization.split(' ')[1];

    let decodeValue;
    // verify token
    try {
        decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            return next(new ClientError('INVALID_TOKEN'));
        }
    } catch (err) {
        return next(new ClientError('INVALID_TOKEN'));
    }

    // Check user exist
    try {
        const checkUser = await User.findOne({ uid: decodeValue.uid });
        if (checkUser) {
            return next(new ClientError('USER_ALREADY_EXIST'));
        }
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
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
        return res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

//* [PUT] api/user/:id

//* [DELETE] api/user/:id

module.exports = { create };
