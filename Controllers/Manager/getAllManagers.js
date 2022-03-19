const mongoose= require ('mongoose');
const Manager = require( '../../Models/manager');

module.exports=(req, res)=> 
{
  Manager.find()
    .select('_id managerName avtManager team age timeAtClb')
    .then((allManagers) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all Manager',
        length:allManagers.length,
        data: allManagers,
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