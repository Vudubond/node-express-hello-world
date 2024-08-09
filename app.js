// Load environment variables from .env file
require('dotenv').config();

var express = require('express');
var app = express();

var routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);

// Use the PORT from the .env file or default to 3000
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log("Catch the action at http://localhost:" + port);
});
