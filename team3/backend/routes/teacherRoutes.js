// routes/teacherRoutes.js
const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.get("/", teacherController.getTeachers);
router.get("/:id", teacherController.getTeacherById);
router.post("/calendar", teacherController.addLessonPlan);

module.exports = router;
