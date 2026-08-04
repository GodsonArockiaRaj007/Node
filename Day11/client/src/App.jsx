import { useEffect, useState } from "react"
import axios from "axios"

//http://localhost:5000/api/curd/add -POST -{"username":String , "useremail":String ,"useage":Number}
//http://localhost:5000/api/curd/get -GET
const App = () => {

  const [formdata,setFormdata]=useState({username:"",useremail:"",userage:""})
  const [data,setData]=useState([])
  const [edit,setEdit]=useState(null)

  const getData=async()=>{
    try {

      const crudData=await axios.get("http://localhost:5000/api/curd/get")
      setData(crudData.data.data)

      
    } catch (error) {
       console.log('error', error.response.data);
       alert(error.response.data.msg)
      
    }
  }
  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

    useEffect(() => {
        getData();
    }, []);
  const handleSubmit=async(e)=>{
    e.preventDefault()

  
    try {

       
      const input=await axios.post("http://localhost:5000/api/curd/add",formdata)

      alert(input.data.msg)
      setFormdata({username:"",useremail:"",userage:""})
      getData()
      
    } catch (error) {
      

       console.log('error', error.data);
       alert(error.response.data.msg)
       
    }
  }

  const handleEdit=(e)=>{
    setEdit(e._id)
    setFormdata({username:e.username,useremail:e.useremail,userage:e.userage})
  }
  return (
    <>
    <form  onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input type="text" name="username" value={formdata.username} onChange={handleChange} /><br />
      <label htmlFor="">Email:</label>
      <input type="text" name="useremail" value={formdata.useremail} onChange={handleChange} /><br />
      <label htmlFor="">Age:</label>
      <input type="number" name="userage" value={formdata.userage} onChange={handleChange} /><br />
      <button type="submit" >{edit?"Update":"Submit"}</button>
    </form>

    <div>
       {data.map((e)=>(
        <div key={e._id}>
          <h1>Name:{e.username}</h1>
          <h1>Email:{e.useremail}</h1>
          <h1>Age:{e.userage}</h1>
          <button onClick={()=>handleEdit(e)}>Edit</button>
    </div>
    ))}
    </div>
     
    </>
   
  )
}

export default App