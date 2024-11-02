// utils/initializeTeachers.js

async function initializeTeachers() {
  const count = await Teacher.countDocuments();
  if (count === 0) {
    // Initialize teachers data
  }
}

module.exports = initializeTeachers;
