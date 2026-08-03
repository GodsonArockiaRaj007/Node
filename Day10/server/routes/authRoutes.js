import express from "express"
import { register,login } from "../controllers/authController.js"

const route=express.Router()

//http://localhost:5000/api/user/register

//http://localhost:5000/api/user/login


route.post("/register",register)
route.post("/login",login)

export default route