const mongoose= require ('mongoose');
const Scores = require( '../../Models/scores');

module.exports = (req, res)=> 
{
    const id = req.params.scoreId;
    Scores.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}