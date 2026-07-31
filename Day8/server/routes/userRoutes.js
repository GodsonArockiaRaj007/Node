import express from "express"
import { adduser,getData } from "../controller/userController.js"

const route=express.Router()


//http://localhost:5000/api/user/adding
route.post("/adding",adduser)
route.get("/getData",getData)

export default route