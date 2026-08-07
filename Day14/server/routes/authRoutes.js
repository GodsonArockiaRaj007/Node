import express from "express"
import { login, register } from "../controllers/authController.js"
import { authMiddleware, registerMiddleware } from "../middleware/authMiddleware.js"
const route=express.Router()


//http://localhost:5000/api/auth/register

route.post("/register",registerMiddleware,register)
route.post("/login",authMiddleware,login)

export default route