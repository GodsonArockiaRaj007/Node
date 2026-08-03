
import { authModel } from "../models/authModel.js"
import bcrypt from "bcrypt"
export const register=async (req,res)=>{
    try {
        
        const {name,email,password}=req.body

         if(!email || !name || !password){
            res.status(404).json({msg:"Invalid Data"})
            return
        }

        const checkemail=await authModel.findOne({email})

        if(checkemail)
        {
            res.status(404).json({msg:"Email Already exists"})
            return

        }
        

        const changePassword= await bcrypt.hash(password,10)

        
        
       

        const register=await authModel.create({name,email,password:changePassword})

        

        res.status(201).json({msg:"Registered Successfully",register})

    } catch (error) {
        console.log("error",error.message);
        
    }
}


export const login=async (req,res)=>{
    try {
        
        const {email,password}=req.body

         if(!email || !password){
            res.status(404).json({msg:"Invalid Data"})
            return
        }

        const checkemail= await authModel.findOne({email})

        if(!checkemail)
        {
            res.status(404).json({msg:"Invalid Email"})
            return

        }

        const checkpassword=await bcrypt.compare(password,checkemail.password)

        if(!checkpassword)
        {
            res.status(404).json({msg:"Invalid Password"})
            return

        }

        

        res.status(201).json({msg:"Login Successfully"})

    } catch (error) {
        console.log("error",error.message);
        
    }
}