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
            const list_of_teachers = [
                {fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd'},
                {fname: 'Anika', lname: 'Bauma', subjects_taught: 'Language Arts, Science', grades_taught: '1st, 2nd'},
                {fname: 'Allison', lname: 'Bokungu', subjects_taught: 'Math, Science, Language Arts', grades_taught: '1st, 2nd, 3rd, 4th'}
            ];
            res.writeHead(200, {'Content-Type': 'application/json'});
            const jsonContent = JSON.stringify(responseData);
            res.end(jsonContent);
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 Not Found</h1>');
    }
  }

}).listen(8080);

console.log('Server running at http://localhost:8080/');
