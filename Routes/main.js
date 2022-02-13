const express = require('express');
const course = require('../Controllers/Course/course');
// const getAllCourse = require('../controllers/course');
// const  getSingleCourse = require('../controllers/course');

const router = express.Router();
router.post('/courses', course.create);
router.get('/courses',course.getAll);
router.get('/courses/:courseId',course.getOne);
router.patch('/courses/:courseId', course.update)
module.exports = router;
