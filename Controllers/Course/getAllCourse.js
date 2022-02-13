const mongoose= require ('mongoose');
const Course = require( '../../Models/course');

module.exports=(req, res)=> 
{
  Course.find()
    .select('_id title description')
    .then((allCourse) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all course',
        Course: allCourse,
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