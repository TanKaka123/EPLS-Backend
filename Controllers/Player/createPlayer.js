const mongoose= require ('mongoose');
const Player = require( '../../Models/player');

module.exports= (req, res)=> 
{
    const player = new Player({
      _id: mongoose.Types.ObjectId(),
      playerName:   req.body.playerName,
      avtPlayer: req.body.avtPlayer,
      role: req.body.role,
      team: req.body.team,
    });
    
    return player
      .save()
      .then((newPlayer) => {
        return res.status(201).json({
          success: true,
          message: 'New created successfully',
          data: newPlayer,
        });
      })
      .catch((error) => {
          console.log(error);
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message, 
        });
      });
  }