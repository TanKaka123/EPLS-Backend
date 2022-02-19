const mongoose= require ('mongoose');
const Clb = require( '../../Models/clb');


// create new cause
const create = require('./createClb');

const getAll = require('./getAllClbs');
  
const getOne = require('./getOneClb');

const update= require('./updateClb');

const deleteOne = require('./deleteOneClb');

const clb ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,

    'deleteOne':deleteOne,
  }
  module.exports = clb;