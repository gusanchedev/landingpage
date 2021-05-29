var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjucks =  require('nunjucks');
const mongoose =  require('mongoose');
const config = require('./config');

//routes
const contactRouter = require('./routes/contact');

//express server
var app = express();

//connect to atlas mongodb cluster
const mongoDb = `mongodb://${config.dbUser}:${config.dbPassword}@gusanchedevcluster-shard-00-00.qu2xk.mongodb.net:27017,gusanchedevcluster-shard-00-01.qu2xk.mongodb.net:27017,gusanchedevcluster-shard-00-02.qu2xk.mongodb.net:27017/${config.db}?ssl=true&replicaSet=atlas-n9qxbu-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(mongoDb, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDb Atlas Cluster');
});

// view engine setup with nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app
});


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route handlers
app.use('/contact', contactRouter);

module.exports = app;
