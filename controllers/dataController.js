// var db=require("../db")
// var Data= require("../schema/data")



// var bcrypt = require('bcryptjs');


//   exports.register=async(req, res) =>{
//     var data =  Data.create({
//         user:{ 
//              firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             userName : req.body.userName,
//             email : req.body.email,
//             password : req.body.password,
//             phone : req.body.phone
//         },
//      billingAddress:{
//         fullName: req.body.fullName,
//         surName: req.body.surName,
//         mail: req.body.mail,
//         mobile: req.body.mobile,
//         door :req.body.door,
//         lane : req.body.lane,
//         country :req.body.country,
//         city : req.body.city,
//         pincode : req.body.pincode
//      },
//      shippingAddress:{
//       fullName1: req.body.fullName1,
//       surName1: req.body.surName1,
//       mail1: req.body.mail1,
//       mobile1: req.body.mobile1,
//       door1 :req.body.door1,
//       lane1 : req.body.lane1,
//       country1 :req.body.country1,
//       city1 : req.body.city1,
//       pincode1 : req.body.pincode1
//    }
//   },
//   function (err, data) {
//       if (err) return res.status(500).send("There was a problem adding the information to the database.");
//       res.status(200).send(data);
//       console.log(data+"post service")
//   });
//   }

//   exports.getData=async(req, res) =>{
//     Data.find({}, function (err, datas) {
//       if (err) return res.status(500).send("There was a problem finding the full details.");
//       res.status(200).send(datas);
//       console.log(datas+"get service")
//   });
//   }

//   exports.updateData=async(req, res) =>{
//     Data.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, data) {
//       if (err) return res.status(500).send("There was a problem updating the data.");
//       res.status(200).send(data);
//   });
//   }


//   exports.deleteData=async(req, res) =>{
//     Data.findByIdAndRemove(req.params.id, function (err, data) {
//       if (err) return res.status(500).send("There was a problem deleting the user.");
//       res.status(200).send("Data: "+ data.user.firstName +" was deleted.");
//   });
//   }

