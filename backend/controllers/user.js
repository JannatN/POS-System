const User = require('../models/user')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

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


module.exports = {login}