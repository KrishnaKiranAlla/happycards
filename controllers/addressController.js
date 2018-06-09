var db=require("../db")
var Address= require("../schema/address")


var bcrypt = require('bcryptjs');


  exports.register=async(req, res) =>{
    var address =  Address.create({
    
      billingAddress:{
                fullName: req.body.fullName,
                surName: req.body.surName,
                mail: req.body.mail,
                mobile: req.body.mobile,
                door :req.body.door,
                lane : req.body.lane,
                country :req.body.country,
                city : req.body.city,
                pincode : req.body.pincode
             },
      shippingAddress:{
              fullName1: req.body.fullName1,
              surName1: req.body.surName1,
              mail1: req.body.mail1,
              mobile1: req.body.mobile1,
              door1 :req.body.door1,
              lane1 : req.body.lane1,
              country1 :req.body.country1,
              city1 : req.body.city1,
              pincode1 : req.body.pincode1
           }
  }, 
  function (err, address) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(address);
      console.log(address+"post service")
  });
  }

  exports.getAddress=async(req, res) =>{
    Address.find({}, function (err, addresses) {
      if (err) return res.status(500).send("There was a problem finding the addresses.");
      res.status(200).send(addresses);
      console.log(addresses+"get service")
  });
  }

  exports.updateAddress=async(req, res) =>{
    Address.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, address) {
      if (err) return res.status(500).send("There was a problem updating the address.");
      res.status(200).send(address);
  });
  }

  exports.deleteAddress=async(req, res) =>{
    Address.findByIdAndRemove(req.params.id, function (err, address) {
      if (err) return res.status(500).send("There was a problem deleting the address.");
      res.status(200).send("Address: "+ address.fullName +" was deleted.");
  });
  }



