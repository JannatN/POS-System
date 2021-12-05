const User = require('../models/user')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const atob = require('atob');


  const signIn = async function (req, res) {
    const user = await User.findOne({
        username: req.body.username
    });
    if (!user) return res.status(400).json({
      error: 'user not found'
    });
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({
      error: 'Invalid Password'
    });
    var object = {
       userID: user.username,
       user_role: user.user_role
     }
  
    const token = jwt.sign(object, process.env.JWT_SECRET, {})
    res.json({
      data: 'signIn success',
      token: token
    });
    console.log(token)
  }

  const parseJwt = function (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var userData = atob(base64);
      return (JSON.parse(userData));
  }

  const getUser = function(req,res,next){
    User.find()
    .then(response=> {
      res.json({
        response
      })
    })
    .catch(err => {
      res.json({
        message: 'An error occur'
      })
    })
  }
  

module.exports = {signIn,parseJwt,getUser}