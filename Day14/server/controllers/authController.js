import bcrypt from "bcrypt"
import { authModel } from "../models/authModel.js"
import jwt from "jsonwebtoken"
export const register=async(req,res)=>{
    try {
        // console.log(req);
        
        const {name,email,password}=req.body
       
        const newPassword=await bcrypt.hash(password,10)
        const registerUser= await authModel.create({name,email,password:newPassword})
        res.status(201).json({msg:"user registered successfully"})
    } catch (error) {

        res.status(500).json({msg:"Error in the Backend"})
        console.log("error",error.message);
        
        
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
         if(!email||!password)
        {
            return res.status(409).json({msg:"Fill all the data"})
        }
        const checkEmail=await authModel.findOne({email})
        if(!checkEmail)
        {
            return res.status(409).json({msg:"Email not found"})
        }
        const checkPassword=await bcrypt.compare(password,checkEmail.password)
        if(!checkPassword)
        {
            return res.status(409).json({msg:"Invalid Password"})
        }

        const accesstoken=jwt.sign({id:checkEmail._id,email:checkEmail.email},process.env.ACCESS_SECRET,{expiresIn:"1h"})
        const refreshtoken=jwt.sign({id:checkEmail._id,email:checkEmail.email},process.env.REFRESH_SECRET,{expiresIn:"1h"})

        checkEmail.refreshtoken = refreshtoken

        await checkEmail.save()
        res.status(200).json({msg:"Login Success",accesstoken,refreshtoken,user:checkEmail})
    } catch (error) {

         res.status(500).json({msg:"Error in the Backend"})
        console.log("error",error.message);
        
    }
}