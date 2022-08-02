const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        displayName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
        },
        avatar: {
            type: String,
        },
        email: {
            type: String,
        },
        emailVerified: {
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('users', UserSchema);
