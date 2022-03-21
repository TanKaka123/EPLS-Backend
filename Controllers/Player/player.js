const mongoose= require ('mongoose');
const Players = require( '../../Models/player');


// create new cause
const create = require('./createPlayer');

const getAll = require('./getAllPlayers');
  
const getOne = require('./getOnePlayer');

const update= require('./updatePlayer');

const deleteOne = require('./deleteOnePlayer');

const player ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,
    'deleteOne':deleteOne,
  }
  module.exports = player;