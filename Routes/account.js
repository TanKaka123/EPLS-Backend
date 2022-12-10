const express = require('express');
const account = require('../Controllers/account/account');

const router = express.Router();
router.post('/account', account.create);

router.get('/account',account.getAll);
//router.get('/account/:id', account.getOne);

module.exports = router;
