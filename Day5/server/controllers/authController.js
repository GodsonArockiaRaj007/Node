import fs from "fs"


export const register= async (req,res)=>{

    try{
        // const data=req.body
        // console.log(`Name:${data.name} \nAge:${data.age}`);
         let arr=[]  
         arr.push(req.body)
        //  console.log(arr);
         const data=JSON.stringify(req.body)

         if(arr)
         {
            fs.appendFile("D:/Backend/node/Day5/server/List/data.txt",data,(e)=>{
                if(e)
                {
                    console.log(e);
                    
                }
               
            })

            fs.readFile("D:/Backend/node/Day5/server/List/data.txt",(e,d)=>{
                if(e)
                {
                    console.log(e);
                    
                }
                else
                {
                    console.log(d);
                    
                }
            })

            return res.status(200).json({arr})
         }
              
        
    }
    catch(error)
    {
        console.log(error);
        
    }

}