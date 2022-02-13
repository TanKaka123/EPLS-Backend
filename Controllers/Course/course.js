const mongoose= require ('mongoose');
const Course = require( '../../Models/course');


// create new cause
const create = require('./createCourse');

const getAll = require('./getAllCourse');
  
const getOne = require('./getOneCourse');

  const update = (req,res)=>{
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

 const course ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,
  }
  module.exports = course;