const errors = require('./error.json');

class ClientError extends Error {
    constructor(name) {
        super('');
        this.name = name;
        this.message = errors[name].message;
        this.status = errors[name].status;
    }
}

module.exports = ClientError;
