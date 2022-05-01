const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

const port = process.env.port

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/tasks", require("./routes/taskRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`.cyan.italic.underline.bold)
})
