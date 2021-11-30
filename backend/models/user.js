const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    user_role: { type: Number, required: false },
}, { timestamps: true }, )

module.exports = mongoose.model('users', User)