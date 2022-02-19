const mongoose= require ('mongoose');
const Clb = require( '../../Models/clb');

module.exports = (req, res)=> 
{
    const id = req.params.clbId;
    Clb.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}