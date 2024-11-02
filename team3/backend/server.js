const http = require('http');
const url = require('url');
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const { MongoClient, ObjectId } = require('mongodb');

//MongoDB connection URI and database/collection setup
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'schoolDB';
const teachersCollectionName = 'teachers';
const proprietorsCollectionName = 'proprietors';


// Connect to MongoDB
async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        return db.collection(collectionName);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

// Initialize sample data if the collection is empty
async function initializeDatabase(collection) {
    const count = await collection.countDocuments();
    if (count === 0) {
        const sampleTeachers = [
            {fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd', calendar_info: [] },
            {fname: 'Michael', lname: 'Smith', subjects_taught: 'French, Math', grades_taught: '1st, 2nd', calendar_info: [] },
            {fname: 'Laura', lname: 'Jones', subjects_taught: 'Science, History, French', grades_taught: '2nd, 3rd, 4th', calendar_info: [] }
        ];
        await collection.insertMany(sampleTeachers);
        console.log("Initialized database with sample teachers");
    }
}

// Function to add a lesson plan
async function addLessonPlan(collection, teacherId, dateSubmitted, lessonPlan) {
    const result = await collection.updateOne(
        { _id: new ObjectId.createFromTime(teacherId) },
        { $push: { calendar_info: { date: dateSubmitted, lesson_plan: lessonPlan } } }
    );
    return result.modifiedCount > 0;
}

async function createProprietorAccount(collection, firstName, lastName, username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await collection.insertOne({
        fname: firstName,
        lname: lastName,
        username: username,
        password: hashedPassword
    });
    return result.insertedId !== null;
}

// Server
http.createServer(async function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const {teachers, proprietors} = await connectToDatabase();

    // Initialize the database if empty
    await initializeDatabase(teachers);

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
            try {
                const { teacherId, date, lessonPlan } = JSON.parse(body);
                const added = await addLessonPlan(teachers, teacherId, date, lessonPlan);

                if (added) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Lesson plan added successfully.' }));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Teacher not found.' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON input.' }));
            }
        });
    } else if (req.method === 'POST' && parsedUrl.pathname === '/proprietor/create-account') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const { firstName, lastName, username, password } = JSON.parse(body);
                const registered = await createProprietorAccount(admins, firstName, lastName, username, password);

                if (registered) {
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Admin registered successfully.' }));
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Admin registration failed.' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON input.' }));
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
}).listen(8080);

console.log('Server running at http://localhost:8080/');
