const cloudinary = require('cloudinary').v2;
const cloudinary_folder = process.env.CLOUDINARY_FOLDER;

const upload = (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, { folder: cloudinary_folder }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { upload };
