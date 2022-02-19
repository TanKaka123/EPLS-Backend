const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const scoresSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  teamName: {
    type: String,
   required: true,
  },
  score: {
    PI: {
      type: Number,
      required: true,
    },
    W: {
      type: Number,
      required: true,
    },
    D: {
      type: Number,
      required: true,
    },
    L: {
      type: Number,
      required: true,
    },
    F: {
      type: Number,
      required: true,
    },
    A: {
      type: Number,
      required: true,
    },
    GD: {
      type: Number,
      required: true,
    },
    Pts: {
      type: Number,
      required: true,
    },
  },
  Last5: {
    match1: {
      type: String,
     required: true,
    },
    match2: {
      type: String,
     required: true,
    },
    match3: {
      type: String,
     required: true,
    },
    match4: {
      type: String,
     required: true,
    },
    match5: {
      type: String,
     required: true,
    },
  },
});

module.exports = mongoose.model("Scores", scoresSchema);
