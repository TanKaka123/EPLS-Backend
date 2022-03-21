const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const playerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  playerName: {
    type: String,
    required: true,
  },
  avtPlayer: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Players", playerSchema);
