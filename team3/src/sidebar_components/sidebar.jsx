import { useState } from 'react';

function Sidebar() {
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
    <div
      className={`${
        isSidebarOpen ? 'w-64' : 'w-16'
      } flex-shrink-0 bg-gray-800 h-screen transition-all duration-300 ease-in-out`}
    >
      <button
        className="p-4 w-full text-white hover:bg-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? '<' : '>'}
      </button>

      {isSidebarOpen && (
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4 text-white">Instructor Name</h2>
          <ul>
            {instructors.map((instructor, index) => (
              <li
                key={index}
                onClick={() => handleInstructorClick(instructor)}
                className={`mb-2 p-2 cursor-pointer rounded-lg ${
                  selectedInstructor === instructor ? 'bg-blue-500' : 'bg-gray-700'
                } hover:bg-blue-400 text-white`}
              >
                {instructor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
