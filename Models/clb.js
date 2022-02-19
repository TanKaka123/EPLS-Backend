const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const clbSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  teamName: {
    type: String,
    required: true,
  },
  stadiumName: {
    type: String,
    required: true,
  },
  imgTeam: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Clubs", clbSchema);
