const mongoose = require("mongoose");

// create new cause
const create = require("./createScores");

const getAll = require("./getAllScores");

const getOne = require("./getOneScores");

const update = require("./updateScores");

const deleteOne = require("./deleteOneScores");

module.exports = {
  create: create,
  getAll: getAll,
  getOne: getOne,
  update: update,
  deleteOne: deleteOne,
};
