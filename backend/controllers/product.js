const Product = require('../models/product')

createProduct = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You have to fill all the requested inputs',
        })
    }

    const product = new Product(body)
    console.log("this is the product: ", product)
    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: `${product.product_name} product created successfully!`,
            })
        })
        .catch(error => {
            return res.status(400).json({
                error: error.message,
                message: 'Product not created!',
            })
        })
}

updateProduct = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Product.findOne({ _id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Product not found!',
            })
        }
        product.product_name = body.product_name
        product.product_category = body.product_category
        product.product_quantity = body.product_quantity
        product.product_price = body.product_price
        product.product_size = body.product_size
        product.product_color = body.product_color
        product.product_description = body.product_description
        product.product_barcode = body.product_barcode

        product
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: product._id,
                    message: 'Product updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Product not updated!',
                })
            })
    })
}

deleteProduct = async(req, res) => {
    await Product.findOneAndDelete({ _id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!product) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }

        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log(err))
}

getProductById = async(req, res) => {
    await Product.findOne({ _id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log(err))
}

getProducts = async(req, res) => {
    await Product.find({}, (err, products) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!products.length) {
            return res
                .status(404)
                .json({ success: false, error: `Products not found` })
        }
        return res.status(200).json({ success: true, data: products })
    }).catch(err => console.log(err))
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProducts,
}