import { useState } from "react";

function Sidebar({ isAuthenticated }) {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructors, setInstructors] = useState([
    "John Doe",
    "Jane Smith",
    "Emily Davis",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instructorToDelete, setInstructorToDelete] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleDeleteInstructor = () => {
    if (isAuthenticated) {
      setInstructorToDelete(instructor);
      setIsModalOpen(true);
    }
  };

  const confirmDelete = () => {
    setInstructors(
      instructors.filter((instructor) => instructor !== instructorToDelete)
    );
    setIsModalOpen(false);
    setInstructorToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setInstructorToDelete(null);
  };

  return (
    <>
      <div className='w-64 flex-shrink-0 bg-gray-800 h-screen transition-all duration-300 ease-in-out'>
        <div className='p-4'>
          <h2 className='text-lg font-bold mb-4 text-white'>Instructor Name</h2>
          <ul>
            {instructors.map((instructor) => (
              <li
                key={instructor}
                className={`mb-2 p-2 cursor-pointer rounded-lg flex justify-between items-center ${
                  selectedInstructor === instructor
                    ? "bg-blue-500"
                    : "bg-gray-700"
                } hover:bg-blue-400 text-white`}
              >
                <span onClick={() => handleInstructorClick(instructor)}>
                  {instructor}
                </span>
                {isAuthenticated && (
                  <button
                    onClick={handleDeleteInstructor}
                    className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                  >
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {isModalOpen && (
          <div
            id='deleteModal'
            className='modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          >
            <div className='modal-content bg-white p-4 rounded'>
              <h4 className='text-lg font-bold'>Confirm Deletion</h4>
              <p>Are you sure you want to delete this instructor?</p>
              <div className='mt-4'>
                <button
                  onClick={confirmDelete}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2'
                >
                  Yes
                </button>
                <button
                  onClick={cancelDelete}
                  className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded'
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
