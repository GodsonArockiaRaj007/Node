import axios from "axios"
const API=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export const register=async(data)=>{
    return API.post("/user/register",data)
}

export const login=async(data)=>{
 
    return API.post("/user/login",data)
}