const mongoose = require('mongoose')
mongoose.pluralize(null) // to avoid creating collection name in lower case and with 's'
// to enable using .env variable
require('dotenv').config();
// mongoose connection
 mongoose.connect('mongodb://localhost:27017/Medicare').then(() => {
     console.log("Connected to MongoDB successfully :)");
 }).catch((e) => {
     console.log("Error while attempting to connect to MongoDB");
     console.log(e);
 });


module.exports = {
    mongoose
};