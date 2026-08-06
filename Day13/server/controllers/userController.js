import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password)
        {
            return res.status(400).json({msg:"Fill all the Data"})
        }
        const checkEmail=await userModel.findOne({email})
        if(checkEmail)
        {
            return res.status(409).json({msg:"Email Already Exists"})
        }
        const newpassword=await bcrypt.hash(password,10)
        const registeruser= await userModel.create({name,email,password:newpassword})
        res.status(201).json({msg:"Registered Successfully"})

    } catch (error) {
        console.log("error",error.message);
        res.status(500).json({msg:"error in the backend"})
        
    }
}

export const login=async(req,res)=>{
    try {

         const {email,password}=req.body
         if (!email || !password) 
         {
            return res.status(400).json({msg: "Fill all the Data"});
         }
         const checkEmail=await userModel.findOne({email})
         if(!checkEmail)
         {
            return res.status(500).json("Email Id not found")
         }
        
         const checkPassword=await bcrypt.compare(password,checkEmail.password)
         if(!checkPassword)
         {
            return res.status(500).json({msg:"Invalid Password"})
         }
         const token=await jwt.sign({id:checkEmail.id,email:checkEmail.email},process.env.JWT_SECRET,{expiresIn:'1d'})
         res.status(200).json({msg:"Logined Successfully",user:{id:checkEmail._id,name:checkEmail.name,email:checkEmail.email},token})

    } catch (error) {
        console.log("error",error.message);
        res.status(500).json({msg:"error in the backend"})
        
    }
}