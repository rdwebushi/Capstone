const mongoose =require('mongoose')

const CartSchema = new mongoose.Schema({
    // name:{ type: String, required: true, trim: true },
    _userId: { type: String, required: true },
    // _userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User",  required: true },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product", },],
    // total: {type: Number, default: 0},
   })
   
const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart;
// Cart Examples code
// https://devdojo.com/suniljoshi19/building-a-shopping-cart-in-nodejs