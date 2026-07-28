export const posting=async (req,res)=>{
    try{
        console.log("User Created");
        res.status(200).json(req.body)
        
    }
    catch(e)
    {
        console.log(e);
        
    }
}

export const getting = async (req, res) => {
    console.log("All Users");
    res.status(200).send("All Users");
    
    
};