import express from "express"
import {
  getAllUsers,
  login,
  register,
  getUserById,
  getUser,
  logout,
  testUser
} from "../controllers/usersCtrl";

const router = express.Router()

router
  
  .get("", getAllUsers)
  .get("/get-user-by-cookie", getUser)
  .get("/logout", logout)
  .get("/:id", getUserById)
  .post("/login", login)
  .post("/register", register)
  .post("/test", testUser)

export default router