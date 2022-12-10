const Post = require( '../../Models/post');

module.exports = (req, res)=> 
{
  const id = req.params.id;
  Post.finOne({_id:id})
    .then((singlePost) => {
      res.status(200).json({
        success: true,
        message: `More on ${singlePost.title}`,
        data: singlePost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This course does not exist',
        error: err.message,
      });
   });
}