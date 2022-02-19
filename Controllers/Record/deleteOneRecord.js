const mongoose= require ('mongoose');
const Record = require( '../../Models/record');

module.exports = (req, res)=> 
{
    const id = req.params.recordId;
    Record.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}