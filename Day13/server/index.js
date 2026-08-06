import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from "./routes/userRoutes.js"
dotenv.config()

const app=express()

const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())
connectDB()
app.use("/api/user",userRoute)
app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/user