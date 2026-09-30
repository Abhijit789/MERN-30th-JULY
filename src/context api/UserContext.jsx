import  { useContext } from 'react'
import UserContext from './contextConfig';

function UserContxt() {
    let{user,setUser}=useContext(UserContext);
    console.log(user);
    let{name,role}=user

    function updateUser(){
        setUser((prev)=>({
             ...prev,
             name:"gangadhar",
             role:"Fullstack Developer"
        }))
    }
  return (
    <>
    <h2>User Compoennt</h2>
     <ul>
        <li>Name : {name}</li>
        <li>Role : {role}</li>
     </ul>
     <button onClick={updateUser}>Update Profile</button>
    </>
  )
}

export default UserContxt