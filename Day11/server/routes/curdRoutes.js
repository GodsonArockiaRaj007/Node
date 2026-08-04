import express from "express"
import { adding , getting} from "../controllers/curdControllers.js"

const route=express.Router()

//http://localhost:5000/api/curd/add -POST -{"username":String , "useremail":String ,"useage":Number}
//http://localhost:5000/api/curd/get -GET


route.post("/add",adding)
route.get("/get",getting)

export default route