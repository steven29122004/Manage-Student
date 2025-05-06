const express = require('express');
const router = express();
const Controller = require('./controller');

router.get('/', Controller.homePage);
router.get('/viewAll', Controller.viewAll);
router.get('/studentDetail/:id', Controller.studentDetail);

module.exports = router;