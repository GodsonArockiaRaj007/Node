import http from "http"
import fs from "fs";
const app=http.createServer()
const port=5000
// console.log(http);
// console.log(fs);


app.listen(port,()=>{
    console.log("Server is running...");
    
})
