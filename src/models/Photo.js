const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
    {
        imageId: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        public: {
            type: Boolean,
            default: true,
        },
        userId: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('photos', PhotoSchema);
