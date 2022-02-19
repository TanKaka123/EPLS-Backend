const mongoose= require ('mongoose');
const Clb = require( '../../Models/clb');

module.exports= (req, res)=> 
{
    const clb = new Clb({
      _id: mongoose.Types.ObjectId(),
      teamName:   req.body.teamName,
      stadiumName: req.body.stadiumName,
      imgTeam: req.body.imgTeam,
    });
    
    return clb
      .save()
      .then((newClb) => {
        return res.status(201).json({
          success: true,
          message: 'New created successfully',
          Clb: newClb,
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