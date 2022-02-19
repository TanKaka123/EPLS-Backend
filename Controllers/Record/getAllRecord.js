const mongoose= require ('mongoose');
const Record = require( '../../Models/record');

module.exports=(req, res)=> 
{
  Record.find()
    .select('_id title position name clbName imgCLB recordNumber')
    .then((allRecords) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all Records',
        length:allRecords.length,
        Record: allRecords,
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