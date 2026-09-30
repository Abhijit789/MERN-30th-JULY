import { useEffect, useState } from "react";

function useUserFetch(url){
    let[user,setUser]=useState([])
    let[loading,setLoading]=useState(false)
    let[error,setError]=useState(null)

    async function getUser(){
        try{
            setLoading(true)
            let res=await fetch(url);
            if(!res.ok){
                throw new Error("data is not found")
            }
            let data=await res.json();
            setUser(data);
            setLoading(false)
        }catch(err){
            setError(err.message)

        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getUser()
    },[])

    return {
        user,
        error,
        loading
    }
}

export default useUserFetch;