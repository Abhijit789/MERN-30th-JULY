import { useEffect, useState } from "react"
import { API_CLIENT, BASE_URL } from "./axiosConfig";
import LoadingSpinner from "../loading spinner/LoadingSpinner";

function User() {
    let[users,setUsers]=useState([]);

    let [loading,setLoading]=useState(true)

    async function getUsers(){
        try{
            setLoading(true)
            let response= await API_CLIENT.get(BASE_URL);
            let data=await response.data;
            console.log(data);
            setLoading(false)
            setUsers(data)
            
        }catch{
            console.log("error data is not found");
            setLoading(false)
            
        }
    }

    useEffect(()=>{
       let apiDebounce=setTimeout(()=>{
           getUsers()
       },2000)

       return ()=>{
        clearTimeout(apiDebounce)
       }
    },[])
  return (
    <>
     <h2>Api Fetching with axios confinguration</h2>
      <ul>
        {
            loading?<LoadingSpinner/>:(
                users.map((user)=>{
                    return <li key={user.id}>{user.id}. {user.name}</li>
                })
            )
        }
      </ul>
    </>
  )
}

export default User