var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var data = fs.readFileSync("manufacturing.html","utf-8");
var data2 = fs.readFileSync("technology.html","utf-8");
var data3 = fs.readFileSync("contact.html","utf-8");

app.get('/', function(request, response) {
  response.send(data);
});

app.get('/technology.html', function(request, response) {
  response.send(data);
});

app.get('/contact.html', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});