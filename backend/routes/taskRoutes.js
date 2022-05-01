const express = require("express")
const { getTasks, addTask, editTask, deleteTask } = require("../controllers/taskController")
const { protect } = require("../middleware/authMiddleware")

const router = express.Router()

router.route("/").get(protect, getTasks).post(protect, addTask)

router.route("/:id").put(protect, editTask).delete(protect, deleteTask)

module.exports = router
