import curdModel from "../models/curdModel.js"

export const adding=async(req,res)=>{
    try {
        
        

        const{username,useremail,userage}=req.body

        if(!username||!useremail||!userage)
        {
            res.status(500).json({msg:"Fill add data"})
            return
        }

        const checkemail= await curdModel.findOne({useremail})

        if(checkemail)
        {
             res.status(500).json({msg:"Email already exists"})
             return
        }

        const data=await curdModel.create({username,useremail,userage})

        res.status(201).json({msg:"Data added successfully"})

    } catch (error) {

        console.log("error",error.message);
        
        res.status(500).json({msg:"Error in backend"})
        
    }
}

export const getting = async(_,res)=>{

    try {
        
        const data= await curdModel.find()
        res.status(200).json({msg:"Data fetched successfully",data})

    } catch (error) {
         console.log("error",error.message);
        
        res.status(500).json({msg:"Error in backend"})
        
    }

}