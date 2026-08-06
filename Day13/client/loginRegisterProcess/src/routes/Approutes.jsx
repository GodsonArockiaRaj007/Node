import Navbar from "../components/Navbar"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import {Routes,Route} from "react-router-dom"

const Approutes = () => {
  return (
    <>

    <Navbar/>
    <Routes>

       <Route path="/" element={<Register />}></Route>
       <Route path="/login" element={<Login/>}> </Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
    </>
  )
}

export default Approutes