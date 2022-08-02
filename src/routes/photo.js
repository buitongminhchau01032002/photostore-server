const express = require('express');
const photoController = require('../controllers/photoController');
const validateIdMiddleware = require('../middleware/validateId');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/:id', validateIdMiddleware, authMiddleware, photoController.readOne);
router.get('/', authMiddleware, photoController.read);

router.post('/', authMiddleware, photoController.create);

router.put('/:id', validateIdMiddleware, authMiddleware, photoController.update);

router.delete('/:id', validateIdMiddleware, authMiddleware, photoController.destroy);

module.exports = router;
