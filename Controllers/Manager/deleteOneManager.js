const mongoose= require ('mongoose');
const Manager = require( '../../Models/manager');

module.exports = (req, res)=> 
{
    const id = req.params.managerId;
    Manager.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
      }));
}