const mongoose = require("mongoose");
const Post = require("../../Models/post");

module.exports = (req, res) => {
  const posts = new Post({
    _id: mongoose.Types.ObjectId(),
    nameBook: req.body.nameBook,
    bookAvatar: req.body.bookAvatart,
    nameAuthor: req.body.nameAuthor,
    idAuthor: req.body.idAuthor,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    listReact: req.body.listReact,
  });

  return posts
    .save()
    .then((newPost) => {
      return res.status(201).json({
        success: true,
        message: "New created successfully",
        data: newPost,
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
