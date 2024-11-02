import { useState } from 'react';

function Sidebar({ isAuthenticated }) {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructors, setInstructors] = useState(['John Doe', 'Jane Smith', 'Emily Davis']);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleDeleteInstructor = (instructor) => {
    if (isAuthenticated) {
      setInstructors((prevInstructors) =>
        prevInstructors.filter((name) => name !== instructor)
      );
    }
  };

  return (
    <div
      className="w-64 flex-shrink-0 bg-gray-800 h-screen transition-all duration-300 ease-in-out"
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-white">Instructor Name</h2>
        <ul>
          {instructors.map((instructor, index) => (
            <li
              key={index}
              className={`mb-2 p-2 cursor-pointer rounded-lg flex justify-between items-center ${
                selectedInstructor === instructor ? 'bg-blue-500' : 'bg-gray-700'
              } hover:bg-blue-400 text-white`}
            >
              <span onClick={() => handleInstructorClick(instructor)}>{instructor}</span>
              {isAuthenticated && (
                <button
                  onClick={() => handleDeleteInstructor(instructor)}
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
