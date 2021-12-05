// const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
// const User = require("../models/user");;

// verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send({ message: "No token provided!" });
//   }

//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ message: "Unauthorized!" });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// isAdmin = (req, res, next) => {
//   User.findById(req.userId).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//   });
// };

// isCashier = (req, res, next) => {
//   User.findById(req.userId).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//   });
// };

// const auth = {
//   verifyToken,
//   isAdmin,
//   isCashier
// };
// module.exports = auth;

const jwt = require('jsonwebtoken')
const userController = require("../controllers/user");
const User = require("../models/user");
const verifyToken = async(req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        const verified = jwt.verify(bearerToken, process.env.JWT_SECRET);
        var userData = userController.parseJwt(bearerToken);
        req.userData = userData
        next() 
    } catch (error) {
        res.status(400).json({ error: 'token not valid' });
    }
}
module.exports = verifyToken