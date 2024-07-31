const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter Product Name']
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },
    
        qtyType: {
            type: String,
            enum: ['packet', 'gram', 'liter'],
            required: true,
            default: 'gram'
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;