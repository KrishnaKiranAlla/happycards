var mongoose= require("mongoose")

var UserSchema = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    userName:String,
    password: String,
  });
  mongoose.model('User', UserSchema);
  
  module.exports = mongoose.model('User');