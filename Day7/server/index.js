import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "./config/db.js"


dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

connectDB()

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
