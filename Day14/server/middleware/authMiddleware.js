import jwt from "jsonwebtoken"
import { authModel } from "../models/authModel.js";
export const authMiddleware=(req,res,next)=>{

    try {
        const authHeaders=req.headers.authorization;
        if(!authHeaders)
        {
            return res.status(409).json({msg:"Header not fount"})
        }

        const token=authHeaders.split(" ")[1]
        if(!token)
        {
            return res.status(404).json({msg:"Token not found"})
        }

        const decoded=jwt.verify(token,process.env.REFRESH_SECRET)
        console.log(decoded);
        req.user = decoded
        next()
        
    } catch (error) {
        res.status(500).json({msg:"error",error})
        
    }

}
export const registerMiddleware=async(req,res,next)=>{
    try {
         const {name,email,password}=req.body
            if(!name||!email||!password)
            {
                return res.status(409).json({msg:"Fill all the data"})
            }
        
            const checkEmail=await authModel.findOne({email})
        
            if(checkEmail)
            {
                return res.status(409).json({msg:"Email already exists"})
            }
            const verifyEmail=email.includes("@gmail.com")
            if(!verifyEmail)
            {
                return res.status(409).json({msg:"Email should includes @gmail.com"})
            }

            const verifyPassword=password.length<6
            if(verifyPassword)w
            {
                return res.status(409).json({msg:"Password should contain more than 6 character"})
            }
            next()

    } catch (error) {
        res.status(500).json({msg:"error",error})
        console.log("error",error.message);
        

        
    }
}