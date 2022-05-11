var http = require('http');
var module = require('./myModule');

http.createServer(function (req,res) {
    res.writeHead(200,{'ContentType':'text/html'});
    res.write(`my date and time is currently ${module.myDate()}`);
    res.end();
  }).listen(3000);