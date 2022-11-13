const mongoose  = require('mongoose')
const Product = require('../model/product.model')

/**
 * GET /product
 * Purpose: get all products
 */
 exports.productsList= (req, res) => {
    Product.find({}, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send(err);
      }
    });
  };
  /**
   * GET /product
   * Purpose: get product by id
   */
   exports.productById =  (req, res) => {
      Product.find({ _id: req.params.id },   (err, doc) => {
        if (!err) {
          res.send(doc[0]);
        } else {
          res.send(err);
        }
      });
    };
  /**
   * POST /product
   * Purpose: add new product
   */
   exports.newProduct =  async (req, res) => {
    // get data from request
    let product_name = req.body.name;
    let product_desc = req.body.description;
    let product_price = req.body.price;
    let product_image = req.body.image;
    // set data to schema
    let newProduct = new Product({
      name: product_name,
      description: product_desc,
      price: product_price,
      image: product_image
    });
    // save data to db
    await newProduct.save((err, result) => {
      if (!err) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  };
  /**
   * PATCH /product/:id
   * Purpose: Update a specified product
   */
   exports.updateProduct =   (req, res) => {
    // We want to update the specified product (product document with id in the URL) with the new values specified in the JSON body of the request
    Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    ).then(() => {
      res.send({ message: "updated successfully" });
    });
  };
  /**
   * DELETE /product/:id
   * Purpose: Delete a list
   */
  exports.deleteProduct =  (req, res) => {
    // We want to delete the specified product (document with id in the URL)
    Product.findOneAndRemove({
      _id: req.params.id,
    }).then((removedProductDoc) => {
      res.send(removedProductDoc);
    });
  };
  