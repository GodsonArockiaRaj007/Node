import axios from "axios"

const API=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

export const getdata=async()=>{
    return API.get(`/curd/get`)
}

export const addData=async(datas)=>{

    return API.post("/curd/add",datas)
}

export const updateData=async(id,newdata)=>{
    return API.put(`/curd/update/${id}`,newdata)
}

export const deleteData=async(id)=>{
    return API.delete(`/curd/delete/${id}`)
}