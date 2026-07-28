import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import appRoutes from "./routes/authRoutes.js"
import fs from "fs"
import path from "path"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/register",appRoutes)

const PORT=process.env.PORT || 3000

const folderPath=path.join(process.cwd(),"List")

fs.mkdir(folderPath,{recursive:true},(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Folder Creater Successfully");
        
    }
})

const filePath=path.join(folderPath,"data.txt")
// console.log(filePath);


fs.writeFile(filePath,"",(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("File Created Successfully");
        
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/register