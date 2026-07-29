import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import appRoutes from "./routes/appRoutes.js"

dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

app.use(cors())
app.use(express.json())


app.use("/api/user",appRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/user