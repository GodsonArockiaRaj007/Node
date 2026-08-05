import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import studentRoute from "./routes/studentRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

app.use(cors())
app.use(express.json())
connectDB()
app.use("/api/student",studentRoute)
app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
    
})
// http://localhost:5000/api/student