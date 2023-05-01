import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import usersRoutes from "./routes/usersRoutes"
import imageRoutes from "./routes/images"

const app = express()
app.use(express.json());

dotenv.config()

const mongodb_uri = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.set("strictQuery", true)
mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB")
  })
  .catch((err) => {
    console.log("At mongoose.connect:")
    console.error(err.message)
  })

app.use(express.json())
app.use(cookieParser()) 
app.use("/api/users", usersRoutes)
app.use("/api/images", imageRoutes)
app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`)
})
