var mongoose= require("mongoose")

var AddressSchema = new mongoose.Schema({
  billingAddress:{  
    fullName: String,
    surName: String,
    mail: String,
    mobile: String,
    door :String,
    lane : String,
    country :String,
    city : String,
    pincode : String
  },
  shippingAddress:{
    fullName1: String,
    surName1: String,
    mail1: String,
    mobile1: String,
    door1 :String,
    lane1 : String,
    country1 :String,
    city1 : String,
    pincode1 : String
  }

  });
  mongoose.model('Address', AddressSchema);
  
  module.exports = mongoose.model('Address');