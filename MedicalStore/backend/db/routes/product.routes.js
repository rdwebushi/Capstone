const express = require("express");
const router = express.Router();
const ProductController = require('../controller/product.controller')
//const uploadImage = require('../middleware/multer').default

router.get('/', ProductController.productsList)
router.get('/:id', ProductController.productById)
router.post('/', ProductController.newProduct)
//router.post('/', uploadImage('products').single('productImg') , ProductController.newProduct)
router.patch('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router;