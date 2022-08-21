const express = require('express');
const router = express.Router();
const photoRoute = require('./photo');
const userRoute = require('./user');
const analysisRoute = require('./analysis');

router.use('/photo', photoRoute);
router.use('/analysis', analysisRoute);
router.use('/user', userRoute);

module.exports = router;
