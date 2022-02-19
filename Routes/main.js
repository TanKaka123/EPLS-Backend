const express = require('express');
const course = require('../Controllers/Course/course');

const router = express.Router();
router.post('/courses', course.create);
router.get('/courses',course.getAll);
router.get('/courses/:courseId',course.getOne);
router.patch('/courses/:courseId', course.update);
router.delete('/courses/:courseId', course.deleteOne);

module.exports = router;
