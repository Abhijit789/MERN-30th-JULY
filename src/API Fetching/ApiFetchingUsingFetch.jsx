import { useEffect, useState } from "react"
import LoadingSpinner from "../loading spinner/LoadingSpinner";

function ApiFetchingUsingFetch() {
    let [user,setUser]=useState([]);
    let [loading,setLoading]=useState(true)
    async function getUser(){
        try{
            setLoading(true)
            let response=await fetch("https://jsonplaceholder.typicode.com/users");
            let userData=await response.json();
            console.log(userData);
            setUser(userData)
            setLoading(false)
            
        }catch{
            console.log("data is not found");
            setLoading(false)
            
        }finally{
            console.log("finally get execute");
            setLoading(false)
            
        }
    }

    useEffect(()=>{
        let fetchApi=setTimeout(()=>{
              getUser()
        },2000)
        return ()=>{
            clearTimeout(fetchApi)
        }
    },[])
  return (
    <>
     <h2>User Profile</h2>
     <ul>
        {
            loading?<LoadingSpinner/>:(user.map((user)=>{
                return <li key={user.id}>{user.name}</li>
            }))
        }
     </ul>
    </>
  )
}

export default ApiFetchingUsingFetch