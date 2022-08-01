const ClientError = require('../../utils/ClientError');
const ServerError = require('../../utils/ServerError');
const Photo = require('../../models/Photo');
const imageToolkit = require('../../utils/imageToolkit');

//* [GET] api/public/photo
const read = async (req, res, next) => {
    try {
        //todo: Add user info
        const photos = await Photo.find({ public: true });
        return res.status(200).json({ success: true, photos });
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

//* [GET] api/public/photo/:id
const readOne = async (req, res, next) => {
    const id = req.params.id;
    try {
        const photo = await Photo.findById(id);
        //todo: Add user info
        if (!photo) {
            return next(new ClientError('PHOTO_ID_NOT_FOUND'));
        }
        if (!photo.public) {
            return next(new ClientError('PHOTO_NOT_PUBLIC'));
        }
        return res.status(200).json({ success: true, photo });
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

//* [POST] api/public/photo
const create = async (req, res, next) => {
    const { photo, title, description } = req.body;

    // Validate field
    if (!photo || !title) {
        return next(new ClientError('INVALID_FIELD'));
    }

    // Upload image
    let imageResult;
    try {
        imageResult = await imageToolkit.upload(photo);
        if (!imageResult) {
            return next(new ServerError('IMAGE_UPLOAD_FAIL'));
        }
    } catch (err) {
        return next(new ServerError('IMAGE_UPLOAD_FAIL', err));
    }

    // Create photo
    //todo: Add user info
    try {
        const newPhoto = new Photo({
            imageId: imageResult.public_id,
            url: imageResult.secure_url || 'https://picsum.photos/200/300',
            title,
            description: description || '',
            public: true,
        });
        await newPhoto.save();
        return res.status(201).json({ success: true, photo: newPhoto });
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

//* [DELETE] api/public/photo/:id
const destroy = async (req, res, next) => {
    const id = req.params.id;

    // Check photo
    let photo;
    try {
        photo = await Photo.findById(id);
        if (!photo) {
            return next(new ClientError('PHOTO_ID_NOT_FOUND'));
        }
        if (!photo.public) {
            return next(new ClientError('PHOTO_NOT_PUBLIC'));
        }
    } catch (err) {
        next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }

    // Delete image
    try {
        await imageToolkit.destroy(photo.imageId);
    } catch (err) {
        return next(new ServerError('IMAGE_DELETE_FAIL', err));
    }

    // Delete photo
    try {
        await Photo.findByIdAndDelete(id);
        return res.status(201).json({ success: true });
    } catch (err) {
        return next(new ServerError('INTERNAL_SERVER_ERROR', err));
    }
};

module.exports = { read, readOne, create, destroy };
