import express from "express"
import { register } from "../controllers/authController.js"


const route=express.Router()

route.post("/user",register)

export default route

//http://localhost:5000/api/register/user