const mongoose= require ('mongoose');
const Course = require( '../../Models/course');

module.exports = (req, res)=> 
{
    const id=req.params.courseId;
    const updateObject = req.body;
    Course.update({id:id},{$set:updateObject})
    .exec()
    .then(()=>{
        res.status(200).json({
            success:true,
            message:'update success',
            update : updateObject,
        });
    })
    .catch(()=>{
      res.status(500).json({
          success: false,
          message: 'Server error. Please try again.'
        });
    })
}