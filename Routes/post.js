const express = require('express');
const post = require('../Controllers/post/post');

const router = express.Router();
router.post('/post', post.create);

router.get('/post',post.getAll);
//router.get('/post/:id', post.getOne);

module.exports = router;
