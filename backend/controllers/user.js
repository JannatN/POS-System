const user = require('../models/user')

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You have to fill all the requested inputs',
        })
    }

    const user = new user(body)
    console.log("this is the product: ", user)
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
module.exports = {
    createUser,
 
}