const express = require('express');
const photoRoute = require('./photo');
const router = express.Router();

router.use('/photo', photoRoute);

module.exports = router;
