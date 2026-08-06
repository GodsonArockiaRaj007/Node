import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../apis/axios"


const Login = () => {

     const navigate=useNavigate()

    const [data,setData]=useState({email:"",password:""})
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    // console.log(data);
    

    const handleLogin=async(e)=>{
        e.preventDefault()
        try {


            const loginuser=await login(data)
            // console.log(loginuser);
            
            alert(loginuser.data.msg)
            // console.log("loginuser:", loginuser);
            // console.log(loginuser.data.token); 
            localStorage.setItem("jwt",JSON.stringify(loginuser.data.token))

            
            navigate("/dashboard",{state:loginuser.data.user})
            
        } catch (error) {
            alert(error.response.data.msg)
            console.log("error",error.message);
            
        }
    }

  return (

    <>
     <form onSubmit={handleLogin}>
      
        <label>Email:</label>
        <input type="text" name="email" value={data.email} onChange={handleChange}  />
        <label>Password:</label>
        <input type="text" name="password" value={data.password} onChange={handleChange}  />
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login