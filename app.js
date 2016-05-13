var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


var mongoPath = process.env.MONGOLAB_URI ||'mongodb://localhost/instugrom';
var mongoose = require('mongoose');
mongoose.connect(mongoPath);

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));


// routing
var indexRouter = require('./routes/index');
var photoRouter = require('./routes/api/photos')

app.use('/', indexRouter);
app.use('/api/photos', photoRouter);


//listening
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("Captain, we have incoming communique from Starbase " + port);
})
