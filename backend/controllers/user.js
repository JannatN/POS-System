const User = require('../models/user')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const atob = require('atob');

const login = (req, res) => {
  var username = req.body.username
  var password = req.body.password

  User.findOne({
    username: req.body.username
  }).then(user => {
    if(user){
      // bcrypt.compare(password,user.password, function(err,result){
      //   if(err){
      //     res.json({
      //       error: err
      //     })
      //   }
      let result = user.password
      // console.log(result == password)
      // console.log(result)
      // console.log(password)
        if(result == password){
          let token = jwt.sign({username:user.username},'verySecretValue', {expiresIn:'1h'})
          res.json({
            message: 'Login Successful',
            token
          })
        }else{
          res.json({
            message: 'Password does not matched'
          })
        }
      //})
    }else{
      res.json({
        message: 'No user found !'
      })
    }
  })
  }
  const signIn = async function (req, res) {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (!user) return res.status(400).json({
      error: 'user not found'
    });
    // check user password with hashed password stored in the database
    const validPassword = req.body.password == 123 //await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({
      error: 'Invalid Password'
    });
    var object = {
       userID: user.username,
       user_role: user.user_role
     }
  
    // object["customerID"] = customer.customerID
    // object["cartID"] = customer.cartID
    const token = jwt.sign(object, process.env.JWT_SECRET, {})
    res.json({
      data: 'singin success',
      //user: user,
      token: token
    });
  }

  const parseJwt = function (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var userData = atob(base64);
      return (JSON.parse(userData));
  }

  

module.exports = {login,signIn,parseJwt}