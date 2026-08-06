import { useState } from "react"
import { register } from "../apis/axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate=useNavigate()

    const [data,setData]=useState({name:"",email:"",password:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleRegister=async(e)=>{
        e.preventDefault()
        try {
            const datas=await register(data)
            alert(datas.data.msg)
            setData({name:"",email:"",password:""})
            navigate("/login")
        } catch (error) {
            alert(error.response.data.msg)
            console.log("error",error.message);
            
        }

    }
  return (

    <>
    <form>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange}  />
        <label>Email:</label>
        <input type="text" name="email" value={data.email} onChange={handleChange}  />
        <label>Password:</label>
        <input type="text" name="password" value={data.password} onChange={handleChange}  />
        <button onClick={handleRegister}>Register</button>
    </form>
    </>
  )
}

export default Register