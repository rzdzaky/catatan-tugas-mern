const asyncHandler = require("express-async-handler")
const Task = require("../models/taskModel")
const User = require("../models/userModel")

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })

  res.status(200).json(tasks)
})

const addTask = asyncHandler(async (req, res) => {
  const { matkul, judul, deskripsi, deadline, status } = req.body

  if (!matkul || !judul || !deskripsi || !deadline || !status) {
    res.status(400)
    throw new Error("Add all fields!")
  }

  const task = await Task.create({
    user: req.user.id,
    matkul,
    judul,
    deskripsi,
    deadline,
    status,
  })

  res.status(200).json(task)
})

const editTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400)
    throw new Error("Goal not found")
  }

  if (!req.user) {
    res.status(401)
    throw new Error("User not Found")
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("user not authorized")
  }

  const editedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(editedTask)
})

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400)
    throw new Error("Goal not found")
  }

  if (!req.user) {
    res.status(401)
    throw new Error("User not Found")
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("user not authorized")
  }

  await Task.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
}
