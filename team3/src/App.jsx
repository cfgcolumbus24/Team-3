import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const teachers = ['Alice Smith', 'John Doe', 'Maria Garcia', 'James Johnson'];

  return (
    <div className="flex min-h-screen">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Button
</button>
      <div className="w-1/4 bg-gray-100 p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Instructor Name</h2>
        <ul>
          {teachers.map((teacher, index) => (
            <li key={index} className="py-2 px-3 hover:bg-gray-200 rounded-md">
              {teacher}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p>This is where your main content will go...TEST</p>
      </div>
    </div>
  );
}

export default App;

