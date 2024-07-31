const Product = require('../models/product.model.js');
const path = require('path')


const createProduct = async (req, res) => {
    try {
        if (!req.file && !req.body.url) {
            return res.status(404).json({ message: 'Either File or URL should be present', status: 'error' });
        }

        if (req.file && req.body.url) {
            return res.status(404).json({ message: 'Cannot send both File and URL', status: 'error' });
        }

        if (req.body.url && !req.file) {
            req.body.image = new URL(req.body.url);
        }

        req.body.image = req.body.url ? req.body.url : `http://localhost:3000/static/${req.file?.filename}`;

        const createProduct = await Product.create(req.body);
        res.status(200).json({
            data: createProduct,
            message: "Product Created Successfully",
            status: 'success'
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to Create Product!', status: 'error', error });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const getAllProducts = await Product.find({});
        res.status(200).json({
            data: getAllProducts,
            message: 'Products Get Successfully',
            status: 'success',
            result: getAllProducts?.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to Get Products', status: 'error' });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const getProduct = await Product.findById(id);
        res.status(200).json({
            data: getProduct,
            message: 'Product Get Successfully',
            status: 'success',
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to Get Product', status: 'error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        if (!req.file && !req.body.url) {
            return res.status(404).json({ message: 'Either File or URL should be present', status: 'error' });
        }

        if (req.file && req.body.url) {
            return res.status(404).json({ message: 'Cannot send both File and URL', status: 'error' });
        }

        if (req.body.url && !req.file) {
            req.body.image = new URL(req.body.url);
        }

        req.body.image = req.body.url ? req.body.url : `http://localhost:3000/static/${req.file?.filename}`;

        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);

        if (!updateProduct) {
            return res.status(404).json({ status: 'error', message: 'Product Not Found' });
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json({
            data: updatedProduct,
            status: 'success',
            message: 'Product Updated Successfully'
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to Update product' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({ status: 'error', message: 'Product Not Found' });
        }

        const updatedProductList = await Product.find({});

        res.status(200).json({
            data: updatedProductList,
            status: 'success',
            message: 'Product Deleted Successfully'
        });

    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to Delete product' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}