import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
dotenv.config()

const app=express()

const PORT=process.env.PORT||3000

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes); //http://localhost:5000/api/users
app.use("/api/products", productRoutes);  //http://localhost:5000/api/products
app.use("/api/students", studentRoutes);  //http://localhost:5000/api/students
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
