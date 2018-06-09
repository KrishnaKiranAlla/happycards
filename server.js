var express    = require("express");
var db = require('./db');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
var port = process.env.PORT || 3002;
var routes = require("./routes/index")
var userController = require('./controllers/userController');
var addressController = require('./controllers/addressController');

// var dataController = require('./controllers/dataController');
var router=express.Router();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/user', routes.user);
app.use('/api/address', routes.address);

// app.use('/api/data', routes.data);
app.listen(port,()=>{
    console.log("POSTMAN Server started on port " + port);
});

//paytm app.js


var express = require("express")
    , redirect = require("express-redirect");

var app = express();
redirect(app);
var router = express.Router();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

app.use(router);
require('./routes/admin/testtxn')(app);
require('./routes/admin/pgredirect')(app);
require('./routes/admin/response')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var cors = require('cors');
var routes=require("./routes")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.all('/*', (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '1024mb' }));

app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/images/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    var img_path = `public/images/${req.body.filename}.jpg`
       res.json({ file: img_path });
       var newdata = new db.photo({
           image: img_path
       })
       newdata.save()

  });

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// console.log("Configuring API")
// app.use("/api/frnds",routes.frnds);
// app.use("/api/users",routes.users);
// app.use("/api/addresses",routes.address);


app.listen(8000, () => {
  console.log('Postcard to India Server is started');
});

module.exports = app;
