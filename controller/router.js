const express = require('express');
const router = express();
const Controller = require('./controller');

router.get('/', Controller.homePage);

module.exports = router;