import http, { createServer } from "http"
import dotenv from "dotenv"
import path from "path"
import fs from "fs"

dotenv.config()
const app=createServer()
const PORT=process.env.PORT ||3000

// Setp 1 create folder path

const folderPath=path.join(process.cwd(),"home","image")
// console.log(folderPath);

//Step 2 create folder

fs.mkdir(folderPath,{recursive:true},(e)=>{
    if(e){
        console.log(e);
        
    }
    else
    {
        console.log("Folder Created Successfully");
        
    }
})

//Step 3 create file path

const filePath=path.join(folderPath,"data.txt")
// console.log(filePath);

//step 4 create file

fs.writeFile(filePath,"This is the data file",(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else{
        console.log("File created successfully");
        
    }
    
})



setTimeout(()=>{

    //step 5 append data

    fs.appendFile(filePath,"\nNew data added",(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Data added successfully");
        
    }
})

setTimeout(()=>{

    //step 6 read data

fs.readFile(filePath,"utf-8",(e,data)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log(data);
        
    }
})


},3000)


},2000)









app.listen(PORT,()=>{
    console.log(`Server running on localhost ${PORT}`);
    
})