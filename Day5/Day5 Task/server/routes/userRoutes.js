import express from "express"
import { getting, posting } from "../controllers/userController.js"

const route=express.Router()

route.post("/",posting)   //http://localhost:5000/api/users
route.get("/", getting);  //http://localhost:5000/api/users

export default route