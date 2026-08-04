import express  from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import curdRoutes from "./routes/curdRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000
app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/curd",curdRoutes)

app.listen(PORT,()=>{
    console.log(`Server Running Successfully on http://localhost:${PORT}`); 
})

//http://localhost:5000/api/curd

