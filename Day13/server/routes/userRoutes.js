import express from "express"
import { login, register } from "../controllers/userController.js"

const route=express.Router()

// http://localhost:5000/api/user/register 
// http://localhost:5000/api/user/login

route.post("/register",register)
route.post("/login",login)

export default route