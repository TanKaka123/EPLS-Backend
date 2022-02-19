const mongoose= require ('mongoose');
const Course = require( '../../Models/course');

module.exports = (req, res)=> 
{
    const id = req.params.courseId;
    Course.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}