const mongoose= require ('mongoose');
const Clb = require( '../../Models/clb');

module.exports=(req, res)=> 
{
  Clb.find()
    .select('_id teamName stadiumName imgTeam')
    .then((allClb) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all CLUB',
        length: allClb.length,
        Clb: allClb,
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