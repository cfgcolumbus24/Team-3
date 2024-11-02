const http = require('http');
const url = require('url');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const { MongoClient, ObjectId } = require('mongodb');

//MongoDB connection URI and database/collection setup
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'schoolDB';
const collectionName = 'teachers';


// Connect to MongoDB
async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    return db.collection(collectionName);
}

// Initialize sample data if the collection is empty
async function initializeDatabase(collection) {
    const count = await collection.countDocuments();
    if (count === 0) {
        const sampleTeachers = [
            {id: 1, fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd', calendar_info: [] },
            {id: 2, fname: 'Michael', lname: 'Smith', subjects_taught: 'French, Math', grades_taught: '1st, 2nd', calendar_info: [] },
            {id: 3, fname: 'Laura', lname: 'Jones', subjects_taught: 'Science, History, French', grades_taught: '2nd, 3rd, 4th', calendar_info: [] }
        ];
        await collection.insertMany(sampleTeachers);
        console.log("Initialized database with sample teachers");
    }
}

// Function to add a lesson plan
async function addLessonPlan(collection, teacherId, dateSubmitted, lessonPlan) {
    const result = await collection.updateOne(
        { _id: new ObjectId(teacherId) },
        { $push: { calendar_info: { date: dateSubmitted, lesson_plan: lessonPlan } } }
    );
    return result.modifiedCount > 0;
}

// Server
http.createServer(async function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const collection = await connectToDatabase();

    // Initialize the database if empty
    await initializeDatabase(collection);

    if (req.method === 'GET' && parsedUrl.pathname === '/teachers') {
        const teachers = await collection.find().toArray();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(teachers));

    } else if (req.method === 'GET' && parsedUrl.pathname.startsWith('/teachers/')) {
        const teacherId = parsedUrl.pathname.split('/')[2];
        try {
            const teacher = await collection.findOne({ _id: new ObjectId(teacherId) });
            if (teacher) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(teacher));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Teacher not found.' }));
            }
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid teacher ID format.' }));
        }

    } else if (req.method === 'POST' && parsedUrl.pathname === '/teachers/calendar') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            const { teacherId, date, lessonPlan } = JSON.parse(body);
            const added = await addLessonPlan(collection, teacherId, date, lessonPlan);

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
