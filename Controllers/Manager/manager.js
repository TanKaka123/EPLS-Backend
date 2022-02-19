const mongoose= require ('mongoose');
const Managers = require( '../../Models/clb');


// create new cause
const create = require('./createManager');

const getAll = require('./getAllManagers');
  
const getOne = require('./getOneManager');

const update= require('./updateManager');

const deleteOne = require('./deleteOneManager');

const manager ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,

    'deleteOne':deleteOne,
  }
  module.exports = manager;