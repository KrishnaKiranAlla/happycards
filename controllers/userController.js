var db=require("../db")
var User= require("../schema/user")



  exports.register=async(req, res) =>{
    var user =  User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName : req.body.userName,
      email : req.body.email,
      password : req.body.password,
      phone : req.body.phone
  }, 
  function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
      console.log(user+"post service")
  });
  }
  exports.signin=async(req,res)=>{
    var userName=req.body.userName;
    var password=req.body.password;
    User.findOne({userName:userName,password:password},function(err,user){
      if(err){
        console.log(err);
        return res.status(500).send("there is a problem");
      }
      if(!user){
        return res.status(404).send("not registered");
      }
      return res.status(200).send(user);
    });
  }

exports.allUsers = function (req, res) {
  db.User.find({}, function (err, users) {
    if (err) res.status(500).send({ error: "Failed to get users" });
    res.status(200).send(users);
  })
}
  exports.getUser=async(req, res) =>{
    User.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
      console.log(users+"get service")
  });
  }

  exports.updateUser=async(req, res) =>{
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
  });
  }

  exports.deleteUser=async(req, res) =>{
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: "+ user.userName +" was deleted.");
  });
  }

