const asyncHandler = require("express-async-handler")
const { globalAgent } = require("http")
const Task = require('../models/taskModel')

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find()

  res.status(200).json(tasks)
})

const addTask = asyncHandler(async (req, res) => {
  const { matkul, judul, deskripsi, deadline, status } = req.body

  if (!matkul || !judul || !deskripsi || !deadline || !status) {
    res.status(400)
    throw new Error("Add all fields!")
  }

  const task = await Task.create({
    matkul,
    judul,
    deskripsi,
    deadline,
    status
  })

  res.status(200).json(task)
})

const editTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if(!task) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const editedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,{
      new: true
  })

  res.status(200).json(editedTask)
})

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400)
    throw new Error("Goal not found")
  }

  await Task.remove()

  res.status(200).json({id: req.params.id})
})

module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
}
