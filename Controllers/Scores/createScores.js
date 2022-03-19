const mongoose= require ('mongoose');
const Scores = require( '../../Models/scores');

module.exports= (req, res)=> 
{
    const scores = new Scores({
      _id: mongoose.Types.ObjectId(),
      teamName: req.body.teamName,
      score: {
        PI: req.body.score.PI,
        W: req.body.score.W,
        D:  req.body.score.D,
        L:  req.body.score.L,
        F:  req.body.score.F,
        A:  req.body.score.A,
        GD:  req.body.score.GD,
        Pts:  req.body.score.Pts,
      },
      Last5: {
        match1: req.body.Last5.match1,
        match2: req.body.Last5.match2,
        match3: req.body.Last5.match3,
        match4: req.body.Last5.match4,
        match5: req.body.Last5.match5 ,
      },
    });
    
    return scores
      .save()
      .then((newRecord) => {
        return res.status(201).json({
          success: true,
          message: 'New created successfully',
          data: newRecord,
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