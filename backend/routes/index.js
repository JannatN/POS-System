const express = require('express')
const router = express.Router();

const UserController = require('../controllers/user')
const ProductCtrl = require('../controllers/product')


router.post('/login', UserController.login);

router.post('/product', ProductCtrl.createProduct)
router.put('/product/:id', ProductCtrl.updateProduct)
router.delete('/product/:id', ProductCtrl.deleteProduct)
router.get('/product/:id', ProductCtrl.getProductById)
router.get('/products', ProductCtrl.getProducts)

module.exports = router;
