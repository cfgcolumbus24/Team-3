// models/Proprietor.js
const mongoose = require("mongoose");

const ProprietorSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Proprietor", ProprietorSchema);
