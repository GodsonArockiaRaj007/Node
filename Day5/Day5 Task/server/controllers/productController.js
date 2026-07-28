export const posting=async (req,res)=>{
    try{
        console.log("Product Posted");
        res.status(200).json(req.body)
        
    }
    catch(e)
    {
        console.log(e);
        
    }
}

export const getting=async(req,res)=>{
    try{

            console.log("All Products");
            res.send("All Products ")
    }
    catch(e)
    {
        console.log(e);
        
    }
    
}

export const deleting=async(req,res)=>{
    try{
        console.log("Products Deleted");
        res.send("Products Deleted")
        
        
    }
    catch(e)
    {
        console.log(e);
        
    }
}