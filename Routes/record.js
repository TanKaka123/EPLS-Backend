const express = require('express');
const record = require('../Controllers/Record/record');

const router = express.Router();
router.post('/records', record.create);
router.get('/records',record.getAll);
// router.get('/records/:managerId',record.getOne);
// router.patch('/records/:managerId', record.update);
router.delete('/records/:recordId', record.deleteOne);

module.exports = router;
