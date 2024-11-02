var http = require('http');
var url = require('url');

// Sample list of teachers with ids
const list_of_teachers = [
    {id: 1, fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd'},
    {id: 2, fname: 'Michael', lname: 'Smith', subjects_taught: 'French, Math', grades_taught:'1st, 2nd'},
    {id: 3, fname: 'Laura', lname: 'Jones', subjects_taught: 'Science, History, French', grades_taught: '2nd, 3rd, 4th'}
];

function addLessonPlan(teacherId, date, lessonPlan) {
    const teacher = list_of_teachers.find(t => t.id === parseInt(teacherId));
    if (teacher) {
        const newEntry = {
            date: date,
            lesson_plan: lessonPlan
        };
        teacher.calendar_info.push(newEntry);
        return true;
    }
    return false;
}

http.createServer(function (req, res) {
    
    var parsedUrl = url.parse(req.url, true);
    
    if (req.method === 'GET' && parsedUrl.pathname === '/teachers') {
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(list_of_teachers));

    } else if (req.method === 'POST' && parsedUrl.pathname === '/teachers/calendar') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); 

        });

        req.on('end', () => {
            const {teacherId, date, lessonPlan} = JSON.parse(body);
            const added = addLessonPlan(teacherId, date, lessonPlan);

            if (added) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Lesson plan added successfully.' }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Teacher not found.' }));
            }
        });
    
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }

}).listen(8080);

console.log('Server running at http://localhost:8080/');