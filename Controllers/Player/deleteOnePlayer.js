const mongoose= require ('mongoose');
const Player = require( '../../Models/player');

module.exports = (req, res)=> 
{
    const id = req.params.playerId;
    Player.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}