const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    product_name: { type: String, required: true },
    product_category: { type: String, required: true },
    product_quantity: { type: Number, required: false },
    product_price: { type: Number, required: true },
    product_size: { type: String, required: false },
    product_color: { type: String, required: false },
    product_description: { type: String, required: false },
    product_barcode: { type: Number, required: false },
}, { timestamps: true }, )

module.exports = mongoose.model('products', Product)