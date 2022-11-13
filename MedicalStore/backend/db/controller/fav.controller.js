const mongoose = require("mongoose");
const Favourite = require("../model/fav.model");
const Product = require("../model/product.model");

/**
 * GET /wish-list
 * Purpose: get all products inside wish list
 */
exports.wishList = async (req, res) => {
  Favourite.findOne({ _userId: req.params.id })
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
 * POST /wish-list
 * Purpose: add new product
 */
exports.addProductToList = async (req, res) => {
  // get data from request
  let user_id = req.params.id;
  var product_id = Product({ _id: req.body.product_id });
  // Find if there is wish list for the user
  let wishList = await Favourite.findOne({ _userId: user_id });
  if (wishList) {
    wishList.products.push(product_id);
    wishList.save((err, result) => {
      if (!err) {
        // res.send(result);
      } else {
        // console.log(err);
        // res.send(err);
      }
    });
    return res.send(wishList);
  } else {
    // set data to schema
    let newWishList = new Favourite({
      _userId: user_id,
      products: [product_id],
    });
    // save data to db
    newWishList.save((err, result) => {
      if (!err) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  }
};

/**
 * DELETE /wish-list/:id
 * Purpose: Delete a list
 */
exports.emptyProductsList = (req, res) => {
  // We want to delete the all products from wish list (document with id in the URL)
  Favourite.findOneAndRemove({ _userId: req.params.id }).then(
    (removedProductDoc) => {
      res.send(removedProductDoc);
    }
  );
};
/**
 * DELETE /wish-list/pd/:id
 * Purpose: Delete a product
 */ 
exports.deleteProduct = async (req, res) => {
  // We want to delete the specified product (document with id in the URL)
  // get data from request
  let user_id = req.params.id;
  var product_id = Product({ _id: req.body.product_id });
  // remove the product from list
  let wishList = await Favourite.findOne({ _userId: user_id });
  wishList.products.pull(product_id);
  wishList.save((err, result) => {
    if (!err) {
      // console.log(result)
      //  res.send(result);
      
    } else {
      // console.log(err);
      //  res.send(err);
    }
  });
  return res.send(wishList);
};
