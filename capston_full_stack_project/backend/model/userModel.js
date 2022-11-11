
let mongoose = require("mongoose");
mongoose.pluralize(null);
let userSchema = mongoose.Schema({
    email:{type:String,unique:true},
    password:String,
    name:String,
    mobile_no:String,
    address:String,
    user_type:String
});

let userModel = mongoose.model("user",userSchema)
module.exports=userModel;