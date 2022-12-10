const express = require('express');
const post = require('../Controllers/post/post');

const router = express.Router();
router.post('/_post', post.create);

router.get('/_post',post.getAll);
//router.get('/post/:id', post.getOne);

module.exports = router;
