import { useEffect, useState } from "react"
import axios from "axios"
import { addData, deleteData, getdata, updateData } from "./api/axios"

//http://localhost:5000/api/curd/add -POST -{"username":String , "useremail":String ,"useage":Number}
//http://localhost:5000/api/curd/get -GET
const App = () => {

  const [formdata,setFormdata]=useState({username:"",useremail:"",userage:""})
  const [data,setData]=useState([])
  const [edit,setEdit]=useState(null)

  const getData=async()=>{
    try {

      const crudData=await getdata()
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

       
      const input=await addData(formdata) //axios.post("http://localhost:5000/api/curd/add",formdata)

      alert(input.data.msg)
      setFormdata({username:"",useremail:"",userage:""})
      getData()
      
    } catch (error) {
      

       console.log('error', error.data);
       alert(error.response.data.msg)
       
    }
  }
  const handleUpdate=async(e)=>{
    

    try {
      e.preventDefault()
      // console.log(edit);
      
      const update=await updateData(edit,formdata)
      alert(update.data.msg)
       setFormdata({username:"",useremail:"",userage:""})
      getData()

      setEdit(null)


      
    } catch (error) {

      console.log('error', error.data);
       alert(error.response.data.msg)
      
    }
      

  }

  const handleEdit=(e)=>{
    setEdit(e._id)
    setFormdata({username:e.username,useremail:e.useremail,userage:e.userage})
  }

  const handleDelete=async(id)=>{

    try {

      const removeData= await deleteData(id)
      alert(removeData.data.msg)
      getData()

      
    } catch (error) {
       console.log('error', error.data);
       alert(error.response.data.msg)
      
    }

  }
  return (
    <>
    <form >
      <label htmlFor="">Name:</label>
      <input type="text" name="username" value={formdata.username} onChange={handleChange} /><br />
      <label htmlFor="">Email:</label>
      <input type="text" name="useremail" value={formdata.useremail} onChange={handleChange} /><br />
      <label htmlFor="">Age:</label>
      <input type="number" name="userage" value={formdata.userage} onChange={handleChange} /><br />
      {edit? <button onClick={handleUpdate} >Update</button> : <button onClick={handleSubmit} >Add</button>}
      
    </form>

    <div>
       {data.map((e)=>(
        <div key={e._id}>
          <h1>ID:{e._id}</h1>
          <p>Name:{e.username}</p>
          <p>Email:{e.useremail}</p>
          <p>Age:{e.userage}</p>
          <button onClick={()=>handleEdit(e)}>Edit</button>
          <button onClick={()=>handleDelete(e._id)}>Delete</button>
    </div>
    ))}
    </div>
     
    </>
   
  )
}

export default App