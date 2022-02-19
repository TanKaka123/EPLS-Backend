const mongoose= require ('mongoose');
const Record = require( '../../Models/record');

module.exports= (req, res)=> 
{
    const record = new Record({
      _id: mongoose.Types.ObjectId(),
      title:  req.body.title,
      position: req.body.position ,
      name: req.body.name,
      clbName:  req.body.clbName,
      imgCLB: req.body.imgCLB,
      recordNumber: req.body.recordNumber,
    });
    
    return record
      .save()
      .then((newRecord) => {
        return res.status(201).json({
          success: true,
          message: 'New created successfully',
          Record: newRecord,
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