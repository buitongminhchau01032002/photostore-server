const express = require('express');
const userController = require('../controllers/userController');
// const validateIdMiddleware = require('../middleware/validateId');
const router = express.Router();

// router.get('/:id', validateIdMiddleware, userController.readOne);
// router.get('/', userController.read);

router.post('/', userController.create);

// router.put('/:id', validateIdMiddleware, userController.update);

// router.delete('/:id', validateIdMiddleware, userController.destroy);

module.exports = router;
