const errors = require('../data/errors.json');

class ServerError extends Error {
    constructor(name, err) {
        super('');
        this.name = name;
        this.message = errors[name].message;
        this.status = errors[name].status;
        this.err = err;
    }
}

module.exports = ServerError;
