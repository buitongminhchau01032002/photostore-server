const express = require('express');
const photoController = require('../../controllers/public/photoController');
const router = express.Router();

router.get('/:id', photoController.readOne);
router.get('/', photoController.read);
router.post('/', photoController.create);

module.exports = router;
