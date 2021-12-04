const jwt = require('jsonwebtoken');
const userController = require("../controllers/user");
const User = require("../models/user");

// middleware to validate token
const verifyToken = async(req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        const verified = jwt.verify(bearerToken, process.env.JWT_SECRET);
        var userData = userController.parseJwt(bearerToken);
        req.user = userData;
        if (userData.user_role == 'Admin')
            next() // continuous;
        else
            res.status(300).json({ error: 'You are not authorized as admin' });
    } catch (error) {
        res.status(400).json({ error: 'token not valid' });
    }
}
module.exports = verifyToken;