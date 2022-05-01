const express = require("express")
const { getTasks, addTask, editTask, deleteTask } = require("../controllers/taskController")

const router = express.Router()

router.route('/').get(getTasks).post(addTask)

router.route('/:id').put(editTask).delete(deleteTask)

module.exports = router
