const mongoose= require ('mongoose');
const Manager = require( '../../Models/manager');

module.exports= (req, res)=> 
{
    const manager = new Manager({
      _id: mongoose.Types.ObjectId(),
      managerName:   req.body.managerName,
      avtManager: req.body.avtManager,
      team: req.body.team,
      age: req.body.age,
      timeAtClb: req.body.timeAtClb,
    });
    
    return manager
      .save()
      .then((newManager) => {
        return res.status(201).json({
          success: true,
          message: 'New created successfully',
          Manager: newManager,
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