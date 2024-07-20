const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productControlller.js');

//create Product
router.post('/', createProduct);

//get All Products
router.get('/', getAllProducts);

//get Product
router.get('/:id', getProduct);

//update Product
router.put('/:id', updateProduct);

//delete Product
router.delete('/:id', deleteProduct);

module.exports = router;