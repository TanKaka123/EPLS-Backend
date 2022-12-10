const express = require('express');
const scores = require('../Controllers/account/account');

const router = express.Router();
router.post('/scores', scores.create);
router.get('/scores',scores.getAll);
// router.get('/managers/:managerId',scores.getOne);
// router.patch('/managers/:managerId', scores.update);
//router.delete('/scores/:scoreId', scores.deleteOne);

module.exports = router;
