const mongoose= require ('mongoose');


// create new cause
const create = require('./createRecord');

const getAll = require('./getAllRecord');
  
const getOne = require('./getOneRecord');

const update= require('./updateRecord');

const deleteOne = require('./deleteOneRecord');

const manager ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,

    'deleteOne':deleteOne,
  }
  module.exports = manager;