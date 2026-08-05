import express from "express"
import { adding, getting, updating, deleting} from "../controllers/curdControllers.js"

const route=express.Router()

//http://localhost:5000/api/curd/add -POST -{"username":String , "useremail":String ,"useage":Number}
//http://localhost:5000/api/curd/get -GET
//http://localhost:5000/api/curd/update -PUT


route.post("/add",adding)
route.get("/get",getting)
route.put("/update/:id",updating)
route.delete("/delete/:id",deleting)

export default route