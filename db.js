var mongoose = require('mongoose');  
 
require("dotenv").load()
mongoose.connect("mongodb://localhost:27017/PostCardIndia")

var db = mongoose.connect('mongodb://localhost:27017/PostCardIndia', function(error){
    if(error) console.log(error);

        console.log("connection successful");
});
 
var formSchema = mongoose.Schema({

    ORDER_ID: String,
    CUST_ID: String,
    INDUSTRY_TYPE_ID: String,
    CHANNEL_ID: String,
    TXN_AMOUNT: String,
    MID: String,
    WEBSITE: String,
    PAYTM_MERCHANT_KEY: String,
 
 });
 
 // module.exports = mongoose.model('from', formSchema, 'formdata');
 
 exports.form = mongoose.model('form', formSchema, 'formdata')
 
 
 var transactionSchema = mongoose.Schema({
 
    MID: String,
    ORDERID: String,
    TXNAMOUNT: String,
    CURRENCY: String,
    TXNID: String,
    BANKTXNID: String,
    STATUS: String,
    RESPMSG: String,
    TXNDATE: String,
    GATEWAYNAME: String,
    BANKNAME: String,
    PAYMENTMODE: String,
    CHECKSUMHASH: String,
 
 
 });
 exports.transaction = mongoose.model('transaction', transactionSchema, 'transactiondata')
 
 //upload schema
 
 var uploadschema =mongoose.Schema({
    image: String,
 })
 
 exports.photo=mongoose.model('photo',uploadschema,'photoupload');