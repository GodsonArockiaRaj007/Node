export const posting=async (req,res)=>{
    try{
        console.log("Student Posted");
        res.status(200).json(req.body)
        
    }
    catch(e)
    {
        console.log(e);
        
    }
}

export const getting=async(req,res)=>{
    try{

            console.log("All Students");
            res.send("All Students ")
    }
    catch(e)
    {
        console.log(e);
        
    }
    
}

export const deleting=async(req,res)=>{
    try{
        console.log("Students Deleted");
        res.send("Students Deleted")
        
        
    }
    catch(e)
    {
        console.log(e);
        
    }
}