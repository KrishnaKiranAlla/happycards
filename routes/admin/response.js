var checksum = require('../../model/checksum');
var config = require('../../config/config');
var db=require("../../db")
module.exports = function (app) {
	app.post('/response', function(req,res){
   console.log("in response post");
   var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        if(checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY))
        {
              
               console.log("true");
               res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
        }else
        {
           console.log("false");
          res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
        };

        var newdata = new db.transaction(req.body);
        newdata.save()

//vidisha
  });
};