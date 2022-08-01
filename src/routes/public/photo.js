const express = require('express');
const photoController = require('../../controllers/public/photoController');
const validateIdMiddleware = require('../../middleware/validateId');
const router = express.Router();

router.get('/:id', validateIdMiddleware, photoController.readOne);
router.get('/', photoController.read);

router.post('/', photoController.create);

router.delete('/:id', validateIdMiddleware, photoController.destroy);

module.exports = router;
