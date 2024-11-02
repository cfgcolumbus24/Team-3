import React, { useState } from 'react';
import Sidebar from '../sidebar_components/sidebar'; // Make sure to import the Sidebar component

const PropDashboard = () => {
  // Assuming isAuthenticated is true for demonstration purposes
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Sample data for teachers (similar to instructors in Sidebar)
  const [teachers, setTeachers] = useState(['Mr. Smith', 'Ms. Johnson', 'Mrs. Lee']);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Component */}
      <Sidebar isAuthenticated={isAuthenticated} />

      {/* Dashboard Content */}
      <div style={{ flex: 1, padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
        {/* Dashboard Header */}
        <h1>Proprietor Dashboard</h1>

        {/* Section 1: Teachers Overview */}
        <div style={{ marginBottom: '20px' }}>
          <h2>Teachers Overview</h2>
          <ul>
            {teachers.map((teacher) => (
              <li
                key={teacher}
                className={`mb-2 p-2 cursor-pointer rounded-lg flex justify-between items-center ${
                  selectedTeacher === teacher ? 'bg-blue-500' : 'bg-gray-700'
                } hover:bg-blue-400 text-white`}
                onClick={() => handleTeacherClick(teacher)}
              >
                {teacher}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: School Information */}
        <div style={{ marginBottom: '20px' }}>
          <h2>School Information</h2>
          <p>Overview of the school, current status, and other key details.</p>
        </div>

        {/* Insert Photo */}
        <div style={{ marginBottom: '20px' }}>
          <h2>School Logo</h2>
          {/* Using the provided image link */}
          <img 
            src="https://opportunityintl.github.io/Brand/images/logo2_1.png"
            alt="School Logo" 
            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropDashboard;