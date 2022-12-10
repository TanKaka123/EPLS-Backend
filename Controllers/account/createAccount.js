const mongoose = require("mongoose");
const Account = require("../../Models/account");

module.exports = (req, res) => {
  const accounts = new Account({
    _id: mongoose.Types.ObjectId(),
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    listIdPosted: req.body.listIdPosted,
    listPostReact: req.body.listPostReact,
  });

  return accounts
    .save()
    .then((newAccount) => {
      return res.status(201).json({
        success: true,
        message: "New created successfully",
        data: newAccount,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};
