require('./api/data/db.js');


const fs = require('fs-extra');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var hash = require('bcrypt-nodejs');
var path = require('path');
var favicon = require('serve-favicon');

var routes = require('./api/routes');

app.set('port', 4000);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon('Icon.png'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.use('/Documentation', express.static(__dirname + '/Documentation'));

app.use(function(req, res, next) {
  next();
});

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Add some routing
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Serving on port ' + port);
});
