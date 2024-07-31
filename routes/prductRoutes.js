const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controller/productControlller.js');
const path = require('path')
const multer = require('multer');

// image stored in local(public folder)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.replace(/\s/g, '');
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage });

//create Product
router.post('/', upload.single('image'), createProduct);

//get All Products
router.get('/', getAllProducts);

//get Product
router.get('/:id', getProduct);

//update Product
router.put('/:id', upload.single('image'), updateProduct);

//delete Product
router.delete('/:id', deleteProduct);

module.exports = router;