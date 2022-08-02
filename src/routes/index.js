const express = require('express');
const router = express.Router();
const photoRoute = require('./photo');
const userRoute = require('./user');

router.use('/photo', photoRoute);
router.use('/user', userRoute);

module.exports = router;
