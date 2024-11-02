import React from 'react';

const PropDashboard = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Dashboard Header */}
      <h1>Proprietor Dashboard</h1>

      {/* Section 1: Teachers Overview */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Teachers Overview</h2>
        <p>Manage teachers, view lesson plans, and track their progress.</p>
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
  );
};

export default PropDashboard;
