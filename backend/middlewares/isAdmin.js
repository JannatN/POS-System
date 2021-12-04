const jwt = require('jsonwebtoken');
const userController = require("../controllers/user");
const User = require("../models/user");

// middleware to validate token
const verifyToken = async(req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        console.log('1')
        const bearer = token.split(' ');
        console.log('2')
        const bearerToken = bearer[1];
        console.log('3')
        const verified = jwt.verify(bearerToken, process.env.JWT_SECRET);
        console.log('4')
        var userData = userController.parseJwt(bearerToken);
        console.log('5')
        req.user = userData;
        console.log(req.user)
        if (userData.user_role == 'Admin')
            next() // continuous;
        else
            res.status(300).json({ error: 'You are not authorized as admin' });
    } catch (error) {
        res.status(400).json({ error: 'token not valid' });
    }
}
module.exports = verifyToken;