const express = require('express');
const router = express();
const Controller = require('./controller');

router.get('/', Controller.homePage);
router.post('/', Controller.postStudent);
router.get('/viewAll', Controller.viewAll);
router.get('/studentDetail/:id', Controller.studentDetail);
router.get('/api/studentDetail/:id', Controller.bindingStudent);
router.put('/edit/:id', Controller.editStudent)
router.delete('/studentDetail/:id', Controller.deleteStudent)

module.exports = router;