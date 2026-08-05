import studentModel from "../models/studentModel.js"
export const addStudent=async(req,res)=>{

    try {

        const{name,email,age,course}=req.body
        if(!name||!email||!age||!course)
        {
            return res.status(500).json({msg:"Fill all the details"})
        }
        const checkEmail=await studentModel.findOne({email})
        if(checkEmail)
        {
            return res.status(500).json({msg:"Email Already Exists"})
        }
        const data= await studentModel.create({name,email,age,course})
        res.status(201).json({msg:"Student Added Successfully"})
        
    } catch (error) {
        res.status(500).json({msg:"Error in Backend"})
        console.log("error",error.message);
        
    }
}

export const getStudent=async(req,res)=>{
    try {
        const data=await studentModel.find()
        res.status(200).json({msg:"Students fetched successfully",data})
    } catch (error) {

        res.status(500).json({msg:"Error in Backend"})
        console.log("error",error.message);
        
    }
}

export const updateStudent=async(req,res)=>{
    try {
        const {id}=req.params
        const{name,email,age,course}=req.body
        if(!name||!email||!age||!course)
        {
            return res.status(500).json({msg:"Fill all the details"})
        }
        const update=await studentModel.findByIdAndUpdate(id,{name,email,age,course},{returnDocument:true,runValidators:true})
        res.status(200).json({msg:"Student updated Successfully"})
    } catch (error) {
        res.status(500).json({msg:"Error in Backend"})
        console.log("error",error.message);
    }
}

export const deleteStudent=async(req,res)=>{
    try {
        const {id}=req.params
        const deletedata=await studentModel.findByIdAndDelete(id)
        res.status(200).json({msg:"Student Deleted Successfully"})
        
    } catch (error) {
         res.status(500).json({msg:"Error in Backend"})
        console.log("error",error.message);
        
    }
}
