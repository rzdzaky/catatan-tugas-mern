const mongoose = require("mongoose")

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    matkul: {
      type: String,
      required: [true, "isikan nama matkul"],
    },
    judul: {
      type: String,
      required: [true, "isikan judul tugas"],
    },
    deskripsi: {
      type: String,
      required: [true, "isikan deskripsi tugas"],
    },
    deadline: {
      type: String,
      required: [true, "isikan deadline tugas"],
    },
    status: {
      type: String,
      required: [true, "isikan status tugas"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Task", taskSchema)
