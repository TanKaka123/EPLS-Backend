const mongoose= require ('mongoose');
const Course = require( '../../Models/course');


// create new cause
const create = require('./createCourse');

const getAll = require('./getAllCourse');
  
const getOne = require('./getOneCourse');

const update= require('./updateCourse');

const deleteOne = require('./deleteOneCourses');

const course ={
    'create' : create,
    'getAll': getAll,
    'getOne':getOne,
    'update':update,
    'deleteOne':deleteOne,
  }
  module.exports = course;