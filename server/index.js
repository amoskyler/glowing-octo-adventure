var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname,'../public')));
var server = http.Server(app);

server.listen(5000);

app.get('/*', function(req, res){
  res.sendfile(path.join(__dirname,'../public/index.html'));
})
