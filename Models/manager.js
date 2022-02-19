const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const managerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  managerName: {
    type: String,
    required: true,
  },
  avtManager: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  timeAtClb: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Managers", managerSchema);
