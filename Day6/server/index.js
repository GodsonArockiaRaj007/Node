import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import register from "./routes/registerRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||PORT

app.use(cors())
app.use(express.json())
app.use("/api/user",register)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})


// http://localhost/api/user