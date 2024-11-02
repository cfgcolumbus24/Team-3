// routes/proprietorRoutes.js
const express = require("express");
const router = express.Router();
const proprietorController = require("../controllers/proprietorController");
const proprietorAuthMiddleware = require("../middleware/proprietorAuthMiddleware");

router.post("/create-account", proprietorController.createAccount);
router.post("/login", proprietorController.login);
router.delete("/teachers/:id", proprietorAuthMiddleware, proprietorController.deleteTeacher);

module.exports = router;
