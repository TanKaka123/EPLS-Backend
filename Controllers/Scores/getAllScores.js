const mongoose= require ('mongoose');
const Scores = require( '../../Models/scores');

module.exports=(req, res)=> 
{
  Scores.find()
    .select('_id teamName score.PI score.W score.D  score.L score.F score.A score.GD score.Pts   Last5.match1 Last5.match2 Last5.match3 Last5.match4 Last5.match5 ')
    .then((allScores) => {
      return res.status(200).json({
        success: true,
        message: 'A list of top 7 team in EPL',
        length:allScores.length,
        Scores: allScores,
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