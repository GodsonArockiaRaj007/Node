import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <Link to={"/"}>Register</Link>
    <Link to={"/login"}>Login</Link>
    </>
  )
}

export default Navbar