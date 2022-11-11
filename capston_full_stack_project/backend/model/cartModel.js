const mongoose =require('mongoose')

const CartSchema = new mongoose.Schema({
    // name:{ type: String, required: true, trim: true },
    _userId: { type: String, required: true },
    // _userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User",  required: true },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product", required:true}],
    // total: {type: Number, default: 0},
   })
   
let cartModel = mongoose.model('Cart',CartSchema);
module.exports = cartModel;