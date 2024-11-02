var http = require('http');
var url = require('url');

// Sample list of teachers with ids
const teachers = [
    { id: 1, fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History' },
    { id: 2, fname: 'Michael', lname: 'Smith', subjects_taught: 'English, Music' },
    { id: 3, fname: 'Laura', lname: 'Jones', subjects_taught: 'Physics, Chemistry' }
];

http.createServer(function (req, res) {
    // Parse the URL
    var parsedUrl = url.parse(req.url, true);

    // Handle GET requests
    if (req.method === 'GET' && parsedUrl.pathname === '/teachers') {
        // Get the 'id' query parameter from the URL (expecting fname_lname format)
        const teacherId = parsedUrl.query.id;

        if (teacherId) {
            // Find the teacher with the matching fname_lname (case insensitive)
            const teacher = teachers.find(t => 
                `${t.fname.toLowerCase()}_${t.lname.toLowerCase()}` === teacherId.toLowerCase()
            );

            if (teacher) {
                // Return the teacher's data as JSON
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(teacher));
            } else {
                // Teacher not found
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Teacher not found' }));
            }
        } else {
            // Missing or invalid id query parameter
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ error: 'Invalid or missing teacher id' }));
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }

}).listen(8080);

console.log('Server running at http://localhost:8080/');