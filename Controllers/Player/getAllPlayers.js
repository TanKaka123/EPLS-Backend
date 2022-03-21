const mongoose= require ('mongoose');
const Player = require( '../../Models/player');

module.exports=(req, res)=> 
{
  Player.find()
    .select(' _id playerName avtPlayer role team')
    .then((allPlayers) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all Player',
        length:allPlayers.length,
        data: allPlayers,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}