const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const recordSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  name: { 
      type: String, 
      required: true 
    },
  clbName: {
    type: String,
    required: true,
  },
  imgCLB: { 
      type: String,
       required: true 
    },
  recordNumber: { 
      type: String, 
      required: true 
    },
});

module.exports = mongoose.model("Records", recordSchema);
