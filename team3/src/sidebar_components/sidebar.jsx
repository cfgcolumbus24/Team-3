import { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const instructors = ['John Doe', 'Jane Smith', 'Emily Davis'];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-gray-800 text-white h-screen transition-width duration-300 ease-in-out`}
      >
        <button
          className="p-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? '<' : '>'}
        </button>

        {isSidebarOpen && (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Instructor Name</h2>
            <ul>
              {instructors.map((instructor, index) => (
                <li
                  key={index}
                  onClick={() => handleInstructorClick(instructor)}
                  className={`mb-2 p-2 cursor-pointer rounded-lg ${
                    selectedInstructor === instructor ? 'bg-blue-500' : 'bg-gray-700'
                  } hover:bg-blue-400`}
                >
                  {instructor}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
