var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  // this parses the URL
  var parsedUrl = url.parse(req.url, true);

  // for get requests
  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello World!</h1>');
    } else if (parsedUrl.pathname === '/about') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>About Page</h1>');
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>404 Not Found</h1>');
    }
  }

}).listen(8080);

console.log('Server running at http://localhost:8080/');
