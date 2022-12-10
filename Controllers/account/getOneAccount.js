const Account = require( '../../Models/account');

module.exports = (req, res)=> 
{
  const id = req.params.id;
  Account.finOne({_id:id})
    .then((singleAccount) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleAccount.title}`,
        data: singleAccount,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'This course does not exist',
        error: err.message,
      });
   });
}