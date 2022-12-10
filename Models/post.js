const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const clbSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nameBook: {
    type: String,
    required: true,
  },
  bookAvatart: {
    type: String,
    required: true,
  },
  idAuthor: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  listReact: [
      {
        idUser: String,
        typeReact: Number,
      },
    ],
  
});

module.exports = mongoose.model("post", clbSchema);
