import userModel from "../models/appModel.js"

export const addUser=async(req,res)=>{
    try {
        const {name,email,age}=req.body
        const data=await userModel.create({name,email,age})

        res.status(201).json({msg:"Data added Successfully",data})
    } catch (error) {
        
        console.log("error",error.message);
        
    }
}

export const getData=async(req,res)=>{
    try {
        const data=await userModel.find()

        res.status(200).json({msg:"Data recieved Successfully",data})
    } catch (error) {
        
        console.log("error",error.message);
        
    }
}


export const getDataByID=async(req,res)=>{
    try {

        const {id}=req.params
        const data=await userModel.findById(id)

        res.status(200).json({msg:"Data recieved Successfully",data})
    } catch (error) {
        
        console.log("error",error.message);
        
    }
}

export const updateData=async(req,res)=>{

    try {

        const {id}=req.params
        const {name,email,age}=req.body
        const data=await userModel.findByIdAndUpdate(id,{name,email,age},{returnDocument:"after"})
        res.status(200).json({msg:"updated Successfully",data})
    } catch (error) {

        console.log("error",error.message);
        
    }

    
    
}

export const deleteData=async(req,res)=>{
    try {
        
        const {id}=req.params

        const data=await userModel.findByIdAndDelete(id)

        res.status(200).json({msg:"Data Deleted Successfully"})

    } catch (error) {
        console.log("error",error.message);
        
    }
}