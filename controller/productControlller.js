const Product = require('../models/product.model.js');

const createProduct = async (req, res) => {
    try {
        const createProduct = await Product.create(req.body);
        res.status(200).json({
            data: createProduct,
            message: "Product Created Successfully",
            status: 'success'
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to Create Product!', status: 'error' });
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
            res.status(404).json({ status: 'error', message: 'Product Not Found' });
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