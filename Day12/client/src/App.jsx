import { useState } from "react"
import { deleteStudent, getStudent, postStudent, updateStudent } from "./api/axios"
import { useEffect } from "react"


const App = () => {

  const [student,setStudent]=useState({name:"",email:"",age:"",course:""})
  const [data,setData]=useState([])
  const [editId,setEditId]=useState(null)

  const handleChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
  }

  const getData=async()=>{
    try {

      const studentData=await getStudent()
      setData(studentData.data.data)

      
    } catch (error) {

      alert(error.response.data.msg)
      console.log("error",error.message);
      
      
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const handleAdd=async(e)=>{

    try {
      e.preventDefault()
      const addStudent=await postStudent(student)
      alert(addStudent.data.msg)
      setStudent({name:"",email:"",age:"",course:""})
      getData()

      
    } catch (error) {
       alert(error.response.data.msg)
      console.log("error",error.message);
      
    }

  }
  const handleEdit=(e)=>{
    setEditId(e._id)
    setStudent({name:e.name,email:e.email,age:e.age,course:e.course})

  }

  const handleUpdate=async(e)=>{
    try {
      e.preventDefault()

      const update=await updateStudent(editId,student)
      alert(update.data.msg)
      setStudent({name:"",email:"",age:"",course:""})
      getData()
      setEditId(null)
      
    } catch (error) {
      alert(error.response.data.msg)
      console.log("error",error.message);
      
    }

  }

  const handleDelete=async(id)=>{
    try {
       const deleteData=await deleteStudent(id)
    alert(deleteData.data.msg)
    getData()
      
    } catch (error) {
       alert(error.response.data.msg)
      console.log("error",error.message);
      
    }
   

  }
  return (
    <>
    <form>
      <label htmlFor="">Name:</label>
      <input type="text" name="name" value={student.name} onChange={handleChange} />
      <label htmlFor="">Email:</label>
      <input type="text" name="email" value={student.email} onChange={handleChange} />
      <label htmlFor="">Age:</label>
      <input type="text" name="age" value={student.age} onChange={handleChange} />
      <label htmlFor="">Course:</label>
      <input type="text" name="course" value={student.course} onChange={handleChange} />
      {editId?<button onClick={handleUpdate}>Update</button>:<button onClick={handleAdd}>Add</button>}
     
    </form>
    {
      data.map((e)=>(
        <div key={e._id}>
          <h1>ID:{e._id}</h1>
          <p>Name:{e.name}</p>
          <p>Email:{e.email}</p>
          <p>Age:{e.age}</p>
          <p>Course:{e.course}</p>
          <button onClick={()=>handleEdit(e)}>Edit</button>
          <button onClick={()=>handleDelete(e._id)}>Delete</button>

        </div>
      ))
    }
    </>
  )
}

export default App