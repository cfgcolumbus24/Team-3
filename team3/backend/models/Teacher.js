// models/Teacher.js
const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  subjects_taught: { type: String, required: true },
  grades_taught: { type: String, required: true },
  calendar_info: [
    {
      date: Date,
      lesson_plan: String,
    },
  ],
});

module.exports = mongoose.model("Teacher", TeacherSchema);
