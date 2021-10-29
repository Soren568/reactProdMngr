const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "The product must have a name."]
    },
    price: { 
        type: String,
        required: [true, "The product must have a price."]
    },
    description: { 
        type: String,
        required: [true, "The product must have a description."]
    },
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

