import express from "express"
import { displayHeader, displayParams, displayQuery, displayRequest, getAll } from "../controllers/registerController.js"

const route=express.Router()

// http://localhost:5000/api/user/register
// http://localhost:5000/api/user/register/params/1234567
// http://localhost:5000/api/user/register/query?Sort=asc&search=godson
// http://localhost:5000/api/user/register/header
// http://localhost:5000/api/user/register/getAll

route.post("/register",displayRequest)
route.post("/register/params/:userid",displayParams)
route.post("/register/query",displayQuery)
route.post("/register/header",displayHeader)
route.get("/register/getAll",getAll)

export default route

