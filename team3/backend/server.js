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
        } else if (parsedUrl.pathname === '/teachers') {
            // Send JSON response
            const responseData = {
            message: 'Hello, world!',
            timestamp: new Date()
        };
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(responseData));
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 Not Found</h1>');
    }
  }

}).listen(8080);

console.log('Server running at http://localhost:8080/');
