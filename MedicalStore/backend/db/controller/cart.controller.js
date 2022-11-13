const mongoose = require("mongoose");
const Cart = require("../model/cart.model");
const Product = require("../model/product.model");

/**
 * GET /cart
 * Purpose: get all products inside cart 
 */
exports.CartList = async (req, res) => {
    Cart.findOne({ _userId: req.params.id }, )
    .populate("products")
    .exec((err, result) => {
      if (err) {
        return res.send(err);
      }else{
        if(result!=null){
          return res.send(result.products);
        }
        else{
          return res.send(result)
        }
      }
    });
};

/**
 * POST /cart
 * Purpose: add new product
 */
exports.addProductToCart= async (req, res) => {
  // get data from request
  let user_id = req.params.id;
  let product = await Product.findOne({ _id: req.body.product_id });
  // Find if there is cart for the user
  let cartList = await Cart.findOne({ _userId: user_id },);
  if (cartList) {
    cartList.products.push(product._id);
    cartList.save((err, result) => {
      if (!err) {
        // res.send(result);
      } else {
        // console.log(err);
        // res.send(err);
      }
    });
    return res.status(201).send(cartList);
  } else {
    // set data to schema
    let newCartList = new Cart({
      _userId: user_id,
      // products: [{_id: product._id}],
      products: [product._id],

    });
    // save data to db
    newCartList.save((err, result) => {
      if (!err) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  }
};

/**
 * DELETE /cart/:id
 * Purpose: Delete a cart
 */
exports.emptyProductsList = (req, res) => {
  // We want to delete the all products from cart  (document with id in the URL)
  Cart.findOneAndRemove({ _userId: req.params.id }).then(
    (removedProductDoc) => {
      res.send(removedProductDoc);
    }
  );
};
/**
 * DELETE /cart/pd/:id
 * Purpose: Delete a product
 */
exports.deleteProduct = async (req, res) => {
  // We want to delete the specified product (document with id in the URL)
  // get data from request
  let user_id = req.params.id;
  let product = await Product.findOne({ _id: req.body.product_id });
  // remove the product from list
  let cartList = await Cart.findOne({ _userId: user_id });
  cartList.products.pull(product._id);
  cartList.save((err, result) => {
    if (!err) {
      //  res.send(result);
    } else {
      // console.log(err);
      //  res.send(err);
    }
  });
  return res.status(201).send(cartList);
};
