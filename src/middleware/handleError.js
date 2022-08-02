const ClientError = require('../utils/ClientError');
const ServerError = require('../utils/ServerError');

const handleError = (err, req, res, next) => {
    // Handle client error
    if (err instanceof ClientError) {
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }

    // Handle server error
    if (err instanceof ServerError) {
        console.log(`\x1b[31m [Interal server error]`);
        console.log(err.err);
        console.log(`\x1b[0m`);
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }
};

module.exports = handleError;
