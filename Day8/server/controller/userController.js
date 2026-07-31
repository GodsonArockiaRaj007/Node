// import mongoose from "mongoose"
import userModel from "../models/userModel.js"
export const  adduser=async (req,res)=>{

    try {

        const {name,email,age}=req.body

        const adding=await userModel.create({name,email,age})

        res.status(201).json({msg:"User added Successfully"})
        
    } catch (error) {

        console.log("error",error.message);
        
        
    }
}

export const getData =async(req,res)=>{

    try {

        const data=userModel.find()
        res.status(200).json(data)
        
    } catch (error) {
        console.log("error",error.message);
    }
}