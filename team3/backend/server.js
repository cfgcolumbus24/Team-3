const http = require('http');
const url = require('url');
// const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URI and database/collection setup
// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri);
// const dbName = 'schoolDB';
// const collectionName = 'teachers';

// Connect to MongoDB
// async function connectToDatabase() {
    // await client.connect();
    // console.log("Connected to MongoDB");
    // const db = client.db(dbName);
    // return db.collection(collectionName);
// }

const list_of_teachers = [
    { fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd', calendar_info: []},
    { fname: 'Michael', lname: 'Smith', subjects_taught: 'French, Math', grades_taught: '1st, 2nd', calendar_info:[]},
    { fname: 'Laura', lname: 'Jones', subjects_taught: 'Science, History, French', grades_taught: '2nd, 3rd, 4th', calendar_info:[] }
];

function addLessonPlan(teacherId, dateSubmitted, lessonPlan) {
    const teacher = list_of_teachers.find(t => t.id === parseInt(teacherId));
    if (teacher) {
        const newEntry = {
            date: dateSubmitted,
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

    // tests to see if information from post is added
    } else if (req.method === 'GET' && parsedUrl.pathname.startsWith === '/teachers') {
        // get the teacherId from the url, i.e. /teachers/2, gets the 2
        const teacherId = parsedUrl.pathname.split('/')[2];
        const teacher = list_of_teachers.find(t => t.id === parseInt(teacherId));

        if (teacher) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(teacher));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Teacher not found.' }));
        }

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
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
}).listen(8080);

console.log('Server running at http://localhost:8080/');
