const mongoose =require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description:{ type: String, required: true, trim: true },
    price:{ type: Number, required: true, trim: true },
    image:{ type: String, required: true,  }
 })
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;