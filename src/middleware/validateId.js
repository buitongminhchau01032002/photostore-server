const ClientError = require('../utils/ClientError');
const mongoose = require('mongoose');

const validateId = (req, res, next) => {
    if (mongoose.isValidObjectId(req.params.id)) {
        return next();
    }
    const err = new ClientError('INVALID_ID');
    return res.status(err.status).json({
        success: false,
        error: {
            code: err.name,
            message: err.message,
        },
    });
};

module.exports = validateId;
