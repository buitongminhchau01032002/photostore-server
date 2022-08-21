const ClientError = require('../utils/ClientError');
const ServerError = require('../utils/ServerError');
const Photo = require('../models/Photo');
const User = require('../models/User');

//* [GET] api/analysis
const read = async (req, res, next) => {
    try {
        let photoCount = await Photo.count({});
        let userCount = await User.count({});
        if (photoCount && userCount) {
            return res.status(200).json({
                success: true,
                analysis: {
                    photoCount,
                    userCount,
                },
            });
        } else {
            return next(new ServerError('INTERNAL_SERVER_ERROR', err));
        }
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

module.exports = { read };
