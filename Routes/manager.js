const express = require('express');
const manager = require('../Controllers/Manager/manager');

const router = express.Router();
router.post('/managers', manager.create);
router.get('/managers',manager.getAll);
// router.get('/managers/:managerId',manager.getOne);
// router.patch('/managers/:managerId', manager.update);
router.delete('/managers/:managerId', manager.deleteOne);

module.exports = router;
