const arr=[1,2,3,4,5]

export const displayRequest=async (req,res)=>{
    // console.log(req);
    
    console.log(req.body);
    
}

export const displayParams=async(req,res)=>{
    console.log(req.params);
    
    
}
export const displayQuery=async(req,res)=>{
    console.log(req.query);
    
}

export const displayHeader=async (req,res)=>{
    console.log(req.headers);
    
}

export const getAll=async(req,res)=>{
    // res.status(200).json({arr})
       res.sendStatus(200)

}