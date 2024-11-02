// utils/generateTeacherId.js
function generateTeacherId(fname, lname) {
    const initial = fname.charAt(0).toLowerCase();
    const lastName = lname.toLowerCase();
    return `${initial}_${lastName}`;
  }
  
  module.exports = generateTeacherId;
  