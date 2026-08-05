import express from "express"
import { addStudent, deleteStudent, getStudent, updateStudent } from "../controllers/studentController.js"

const route =express.Router()


// http://localhost:5000/api/student/add -POST {"name":String,"email":String,"age":Number,"course":String}
// http://localhost:5000/api/student/get -GET
// http://localhost:5000/api/student/update -PUT
// http://localhost:5000/api/student/delete -DELETE

route.post("/add",addStudent)
route.get("/get",getStudent)
route.put("/update/:id",updateStudent)
route.delete("/delete/:id",deleteStudent)
export default route