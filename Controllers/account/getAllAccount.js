const Account = require( '../../Models/account');

module.exports=(req, res)=> 
{
  Account.find()
    .select('_id  lastName firstName userName  password  email  listIdPosted  listPostReact')
    .then((listAccount) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all Account',
        length: listAccount.length,
        data: listAccount,
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