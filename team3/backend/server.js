const http = require('http');
const url = require('url');
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URI and database/collection setup
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

// Sample list of teachers to initialize the database (if empty)
const sampleTeachers = [
    { fname: 'Jacqueline', lname: 'Batshuayi', subjects_taught: 'Math, Science, History', grades_taught: '1st, 2nd, 3rd' },
    { fname: 'Michael', lname: 'Smith', subjects_taught: 'French, Math', grades_taught: '1st, 2nd' },
    { fname: 'Laura', lname: 'Jones', subjects_taught: 'Science, History, French', grades_taught: '2nd, 3rd, 4th' }
];

// Function to populate the database with sample data if it's empty
async function initializeDatabase(collection) {
    const count = await collection.countDocuments();
    if (count === 0) {
        await collection.insertMany(sampleTeachers);
        console.log("Initialized database with sample teachers");
    }
}

http.createServer(async function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const teacherId = parsedUrl.query.id;

    // Connect to MongoDB collection
    const collection = await connectToDatabase();

    // Initialize the database with sample data if it's empty
    await initializeDatabase(collection);

    // Handle GET request to fetch teacher data
    if (req.method === 'GET' && parsedUrl.pathname === '/teachers') {
        if (teacherId) {
            try {
                // Fetch a teacher by their unique MongoDB ObjectId
                const teacher = await collection.findOne({ _id: new ObjectId(teacherId) });
                if (teacher) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(teacher));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Teacher not found' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid teacher id format' }));
            }
        } else {
            // Fetch all teachers if no specific ID is provided
            const teachers = await collection.find().toArray();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(teachers));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
}).listen(8080);

console.log('Server running at http://localhost:8080/');
