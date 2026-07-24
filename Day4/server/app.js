import http, { createServer } from "http"
import dotenv from "dotenv"
import path from "path"
import fs, { mkdir } from "fs"
import os from "os"

dotenv.config()
const PORT=process.env.PORT||8000

const app=createServer()


//Task-1

// const folderPath=path.join(process.cwd(),"students")
// fs.mkdir(folderPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Folder Created Successfully");
        
//     }
// })

// const filePath=path.join(folderPath,"students.txt")
// fs.writeFile(filePath,"1.Godson \n 2.Joel \n 3.Darvin \n 4.Sivabalan \n 5.Dennyson",(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("File Created Successfully");
        
//     }
// })

// fs.readFile(filePath, "utf8", (e, data) => {
//     if (e) {
//         console.log(e);
//     } else {
//         console.log(data);
//     }
// });

// fs.appendFile(filePath,"\n 6.Amalan",(e)=>{
//      if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Content Appended Successfully");
        
//     }
// })
// const newPath=path.join(folderPath,"student-list.txt")
// fs.rename(filePath,newPath,(e)=>{
//      if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("File renamed Successfully");
        
//     }
// })


// fs.unlink(newPath,(e)=>{
//       if(e)
//     {
//         console.log(e);
    
//     }
//     else
//     {
//         console.log("File Deleted Successfully");
        
//     }

// })

//Task-2

// const publicPath=path.join(process.cwd(),"public")
// const uploadPath=path.join(process.cwd(),"uploads")
// const configPath=path.join(process.cwd(),"config")
// const logPath=path.join(process.cwd(),"logs")

// console.log(publicPath);
// console.log(uploadPath);
// console.log(configPath);
// console.log(logPath);


// fs.mkdir(publicPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Public Folder Created Successfully");
        
//     }
// })

// fs.mkdir(uploadPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Uploads Folder Created Successfully");
        
//     }
// })
// fs.mkdir(configPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Config Folder Created Successfully");
        
//     }
// })
// fs.mkdir(logPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Logs Folder Created Successfully");
        
//     }
// })

// const cssPath=path.join(publicPath,"css")
// const jsPath=path.join(publicPath,"js")
// const imagesPath=path.join(publicPath,"images")

// console.log(cssPath);
// console.log(jsPath);
// console.log(imagesPath);


// fs.mkdir(cssPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("CSS Folder Created Successfully");
        
//     }
// })
// fs.mkdir(jsPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("JS Folder Created Successfully");
        
//     }
// })
// fs.mkdir(imagesPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Images Folder Created Successfully");
        
//     }
// })


// const documentsPath=path.join(uploadPath,"documents")
// const videosPath=path.join(uploadPath,"videos")

// console.log(documentsPath);
// console.log(videosPath);



// fs.mkdir(documentsPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Documents Folder Created Successfully");
        
//     }
// })
// fs.mkdir(videosPath,{recursive:true},(e)=>{
//     if(e)
//     {
//         console.log(e);
        
//     }
//     else
//     {
//         console.log("Videos Folder Created Successfully");
        
//     }
// })


//Task-3

// console.log(os);
// console.log(process);

// console.log(process.version);
// console.log(process.cwd());
// console.log(os.hostname());
// console.log(process.platform);
// console.log(process.arch);
// console.log(os.cpus().length);
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(process.pid);



//TASK-4


// console.log(`PORT=${process.env.PORT}`);
// console.log(`APP NAME=${process.env.APP_NAME}`);
// console.log(`AUTHOR=${process.env.AUTHOR}`);
// console.log(`BD NAME=${process.env.DB_NAME}`);

// console.log(process.version);
// console.log(process.cwd());






app.listen(PORT,()=>{
    console.log(`Server Running on localhost ${PORT}`);
    
})