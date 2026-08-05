// http://localhost:5000/api/student/add -POST {"name":String,"email":String,"age":Number,"course":String}
// http://localhost:5000/api/student/get -GET
// http://localhost:5000/api/student/update -PUT
// http://localhost:5000/api/student/delete -DELETE
import axios from "axios"

const API=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export const getStudent=async()=>{
    return API.get("/student/get")
}
export const postStudent=async(data)=>{
    return API.post("/student/add",data)
}

export const updateStudent=async(id,newData)=>{
    return API.put(`/student/update/${id}`,newData)
}
export const deleteStudent=async(id)=>{
    return API.delete(`/student/delete/${id}`)
}