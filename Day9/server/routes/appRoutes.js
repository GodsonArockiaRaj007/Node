import express from "express"
import { addUser,getData, getDataByID,updateData,deleteData } from "../controllers/appController.js"

const route=express.Router()


// http://localhost:5000/api/user/adding
// http://localhost:5000/api/user/getting
// http://localhost:5000/api/user/getByID/
// http://localhost:5000/api/user/deleteByID/
// http://localhost:5000/api/user/updating/


route.post("/adding",addUser)
route.get("/getting",getData)
route.get("/getByID/:id",getDataByID)
route.delete("/deleteByID/:id",deleteData)
route.put("/updating/:id",updateData)

export default route