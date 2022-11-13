const mongoose =require('mongoose')
// to encrypt password
const bcrypt =require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true, trim: true },
    email:{ type: String, required: true, trim: true, select:false },
    password:{ type: String, required: true, trim: true },
   /*  image:{
         data: Buffer,
         contentType: String,
         required: true,
     }, */
    // https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
    // https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
})

UserSchema.methods.encryptPassword = async password=>{
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash
}

UserSchema.methods.validPassword = async function(candidatePassword){
    const result = await bcrypt.compare(candidatePassword, this.password)
    return result
}

const User = mongoose.model('User', UserSchema)

module.exports = User;