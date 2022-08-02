const express = require('express');
const router = express.Router();
const photoRoute = require('./photo');

router.use('/photo', photoRoute);

module.exports = router;
