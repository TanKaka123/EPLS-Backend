const express = require('express');
const account = require('../Controllers/account/account');

const router = express.Router();
router.post('/_account', account.create);

router.get('/_account',account.getAll);
//router.get('/account/:id', account.getOne);

module.exports = router;
