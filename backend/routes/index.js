const express = require('express')
const router = express.Router();

const UserController = require('../controllers/user')
const ProductCtrl = require('../controllers/product')
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/auth');


router.post('/login',UserController.signIn);
router.get('/users',[isAdmin],UserController.getUser);

router.post('/product',ProductCtrl.createProduct)
router.put('/product/:id', ProductCtrl.updateProduct)
router.delete('/product/:id', ProductCtrl.deleteProduct)
router.get('/product/:id', ProductCtrl.getProductById)
router.get('/products', ProductCtrl.getProducts)
router.get('/products/:name', ProductCtrl.searchProduct)

module.exports = router;
