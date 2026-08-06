import { useLocation } from "react-router-dom"


const Dashboard = () => {

  const user=useLocation()
  console.log(user);
  
  return (
    <>
    <h1>Welcome {user.state.id}</h1>
    <p>{user.state.email}</p>
    <p>{user.state.name}</p>
    </>
  )
}

export default Dashboard