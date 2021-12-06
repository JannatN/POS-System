const User = require('../models/user')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const atob = require('atob');
const {
    hashSync,
    genSaltSync
  } = require('bcrypt');


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
  
 function createUser (req, res) {
   
    var salt = genSaltSync(10)
    var password = hashSync(req.body.password, salt )
    req.body.password=password
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You have to fill all the requested inputs',
        })
    }

    const user = new User(body)
    console.log("this is the user: ", user)
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                username: user.username,
                password:user.password,
                role:user.role,
                
                message: `${user.username} Account is Created`,
            })
        })
        .catch(error => {
            return res.status(400).json({
                error: error.message,
                message: 'user not created!',
                
            })
        })
}
module.exports = {signIn,parseJwt,getUser,createUser}