const Post = require( '../../Models/post');

module.exports=(req, res)=> 
{
  Post.find()
    .select('_id  nameBook  bookAvatar  nameAuthor  idAuthor  shortDescription  longDescription  listReact')
    .then((listPost) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all POST',
        length: listPost.length,
        data: listPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}