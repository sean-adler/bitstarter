var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(256);
  var length = buf.write(fs.readFileSync('index.html', 'utf8'));
  var respStr = buf.toString('utf8', 0, length);
  response.send(respStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});