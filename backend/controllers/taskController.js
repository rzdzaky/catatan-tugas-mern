const asyncHandler = require("express-async-handler")

const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get tasks",
  })
})

const addTask = asyncHandler(async (req, res) => {
  const { matkul, judul, deskripsi, deadline, status } = req.body

  if (!matkul || !judul || !deskripsi || !deadline || !status) {
    res.status(400)
    throw new Error("Add all fields!")
  }

  res.status(200).json({
    message: "add task",
  })
})

const editTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `edit task ${req.params.id}`,
  })
})

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete task ${req.params.id}`,
  })
})

module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
}
