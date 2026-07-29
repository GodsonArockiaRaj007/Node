import express from "express"
import { detailsController, headerController, loginController, paramsController, productController, registerController, studentController, userinfoController, welcomeController, employeeParamsController, employeepostController, employeeputConntroller, employeedeleteController, employeeCOntroller } from "../controllers/appControllers.js"


const route=express.Router()


// http://localhost:5000/api/user/welcome
// http://localhost:5000/api/user/student
// http://localhost:5000/api/user/register
// http://localhost:5000/api/user/params/123456
// http://localhost:5000/api/user/product?category=mobile&page=1
// http://localhost:5000/api/user/header
// http://localhost:5000/api/user/login
// http://localhost:5000/api/user/details/101
// http://localhost:5000/api/user/userinfo/101?batch=morning


// http://localhost:5000/api/user/employees

route.get("/welcome",welcomeController)
route.get("/student",studentController)
route.post("/register",registerController)
route.get("/params/:id",paramsController)
route.get("/product",productController)
route.get("/header",headerController)
route.post("/login",loginController)
route.get("/details/:id",detailsController)
route.get("/userinfo/:id",userinfoController)
route.get("/employees",employeeCOntroller)
route.get("/employees/:empID",employeeParamsController)
route.post("/employees",employeepostController)
route.put("/employees/:empid",employeeputConntroller)
route.delete("/employees/:empid",employeedeleteController)

// GET    /employees

// GET    /employees/:id

// POST   /employees

// PUT    /employees/:id

// DELETE /employees/:id

export default route