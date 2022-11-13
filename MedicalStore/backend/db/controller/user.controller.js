const mongoose = require("mongoose");
const User = require("../model/user.model");

/**
 * GET /user
 * Purpose: get all users
 */
exports.usersList = (req, res) => {
  User.find({}, "name email", (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(err);
    }
  });
};
/**
 * GET /user
 * Purpose: get user by id
 */
exports.userById = (req, res) => {
  User.find({ _id: req.params.id }, "name email", (err, doc) => {
    if (!err) {
      res.send(doc[0]);
    } else {
      res.send(err);
    }
  });
};
/**
 * POST /user
 * Purpose: add new user
 */
// exports.newUser = (req, res) => {
//   // get data from request
//   let user_name = req.body.name;
//   let user_email = req.body.email;
//   let user_pass = req.body.pass;
//   // set data to schema
//   let newUser = new User({
//     name: user_name,
//     email: user_email,
//     password: user_pass,
//   });
//   // save data to db
//   newUser.save((err, result) => {
//     if (!err) {
//       res.send(result);
//     } else {
//       res.send(err);
//     }
//   });
// };
/**
 * PATCH /user/:id
 * Purpose: Update a specified user
 */
exports.updateUser = (req, res) => {
  // We want to update the specified user (user document with id in the URL) with the new values specified in the JSON body of the request
  User.findOneAndUpdate(
    { _id: req.params.id },
    { 
      $set: { 
        name: req.body.name,
        email: req.body.email,
      }
    }
  ).then(() => {
    res.send({ message: "updated successfully" });
  });
};
/**
 * DELETE /product/:id
 * Purpose: Delete a list
 */
exports.deleteUser = (req, res) => {
  // We want to delete the specified user (document with id in the URL)
  User.findOneAndRemove({
    _id: req.params.id,
  }).then((removedUserDoc) => {
    res.send(removedUserDoc);
  });
};
