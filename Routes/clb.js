const express = require('express');
const clb = require('../Controllers/Clb/clb');

const router = express.Router();
router.post('/clb', clb.create);

router.get('/clb',clb.getAll);
router.delete('/clb/:clbId', clb.deleteOne);

module.exports = router;
