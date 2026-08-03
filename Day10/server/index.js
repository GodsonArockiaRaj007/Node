import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/user",authRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/user