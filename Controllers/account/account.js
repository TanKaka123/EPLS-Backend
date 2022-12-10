// create new cause
const create = require('./createAccount');

const getAll = require('./getAllAccount');
  
const getOne = require('./getOneAccount');

const account ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
  }
  module.exports = account;