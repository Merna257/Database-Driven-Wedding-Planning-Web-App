const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


//connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected to MongoDB');
});

//init app
const app = express();

//setup handlebars view engine 
app.set("views", path.join(__dirname,'views'));
app.set("view engine", "handlebars");

//setup static resources
app.use(express.static(__dirname + "/public"));
// parse application/json//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser("cookiesecret"));

//Routing
var routes = require("./routes/index");
app.use("/", routes);

app.use(function (req, res) {
  res.status(404);
  res.render("404");
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.error(err.message);
  res.status(500);
  res.render("500");
});

//start the server
var port = 3000;
app.listen(port, function(){
    console.log('Server started on port ' + port);
});