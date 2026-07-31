import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from "./routes/userRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/user",userRoute)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
//http://localhost:5000/api/user