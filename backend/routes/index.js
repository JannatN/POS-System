const express = require('express')

const ProductCtrl = require('../controllers/product')

const router = express.Router();

router.post('/product', ProductCtrl.createProduct)
router.put('/product/:id', ProductCtrl.updateProduct)
router.delete('/product/:id', ProductCtrl.deleteProduct)
router.get('/product/:id', ProductCtrl.getProductById)
router.get('/products', ProductCtrl.getProducts)
router.get('/products/:name', ProductCtrl.searchProduct)

module.exports = router;