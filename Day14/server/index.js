import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT ||3000
app.use(cors())
app.use(express.json())
connectDB()
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Server running successfully on http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/auth