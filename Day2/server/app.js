// import http from "http"
// import dotenv from "dotenv"
// import os from "os"
// import path from "path"


// dotenv.config()

// const app=http.createServer()

// console.log(os.cpus());

// const folder=path.join("asserts","image","logo.png")
// console.log(folder);

// console.log(path.resolve("data.txt"));

// console.log(os.hostname());

// console.log(path.basename(folder));

// console.log(process);


// const PORT=process.env.PORT||3000
// app.listen(PORT,()=>{
//     console.log(`Server running on localhost ${PORT}`);
    
// })



import http from "http"
import os from "os"
import path from "path"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()
const app=http.createServer()
const PORT=process.env.PORT


// Task-1
console.log("Host Name:",os.hostname());
console.log("Platform:",os.platform());
console.log("Architecture:",os.arch());
console.log("CPU Information:",os.cpus());
console.log("Total Memory:",os.totalmem());
console.log("Free Memory:",os.freemem());

//Task-2

console.log("Version:",process.version);
console.log("Current Working Directory",process.cwd());
console.log("Platform",process.platform);
console.log("Command Line Arguments",process.argv);
console.log("Environment Variables",process.env);


// Task-3
const folderPath=path.join(process.cwd(),"uploads")
fs.mkdir(folderPath,{recursive:true},(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Folder Created Successfully");
        
    }
})

const imagePath=path.join(folderPath,"images")
const videoPath=path.join(folderPath,"videos")
const documentPath=path.join(folderPath,"documents")

console.log(folderPath);
console.log(imagePath);
console.log(videoPath);
console.log(documentPath);






fs.mkdir(imagePath,{recursive:true},(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Image Folder Created Successfully");
        
    }
})
fs.mkdir(videoPath,{recursive:true},(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Video Folder Created Successfully");
        
    }
})
fs.mkdir(documentPath,{recursive:true},(e)=>{
    if(e)
    {
        console.log(e);
        
    }
    else
    {
        console.log("Document Folder Created Successfully");
        
    }
})


//Task-4

const relativePath=path.join("public","images","logo.png")
const absolutePath=path.join(process.cwd(),relativePath)

console.log("Relative Path: ",relativePath);
console.log("Absolute Path: ",absolutePath);

//Task-5


console.log("Port number: ",process.env.PORT);
console.log("App name: ",process.env.APPNAME);
console.log("Author name: ",process.env.AUTHORNAME);



app.listen(PORT,()=>{
    console.log(`Server running on localhost ${PORT}`);
    
})