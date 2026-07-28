import express from "express"
import { deleting, getting, posting } from "../controllers/productController.js"

const route=express.Router()

route.post("/",posting)
route.get("/",getting)
route.delete("/",deleting)

export default route

 //http://localhost:5000/api/products