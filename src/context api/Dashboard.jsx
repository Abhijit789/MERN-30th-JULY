import { useContext } from "react"
import UserContext from "./contextConfig"

function Dashboard() {
    let{user,setUser}=useContext(UserContext);
    console.log("Dashbord user",user);

    console.log(user);
    let{name,role}=user
    
  return (
    <>
    <h1>Dashboard</h1>
     <ul>
        <li>Name : {name}</li>
        <li>Role : {role}</li>
     </ul>
     </>
  )
}

export default Dashboard