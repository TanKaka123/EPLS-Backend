// create new cause
const create = require('./createPost');

const getAll = require('./getAllPost');
  
const getOne = require('./getOnePost');

const post ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
  }
  module.exports = post;