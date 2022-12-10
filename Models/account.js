const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const accountSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  listIdPosted: [
    {
      idPost: String
    }
  ],
  listPostReact:[
      {
        idPost: String,
        typeReact: Number,
      }
    ]
});

module.exports = mongoose.model("account", accountSchema);
