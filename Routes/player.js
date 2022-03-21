const express = require('express');
const player = require('../Controllers/Player/player');

const router = express.Router();
router.post('/players', player.create);
router.get('/players',player.getAll);
// router.get('/players/:managerId',player.getOne);
// router.patch('/players/:managerId', player.update);
router.delete('/players/:playerId', player.deleteOne);

module.exports = router;
