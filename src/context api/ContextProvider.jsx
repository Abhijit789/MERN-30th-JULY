import { useState } from "react"
import UserContext from "./contextConfig"

function ContextProvider({children}) {
    let[user,setUser]=useState({
        name:"Vijay",
        role:"Software Developer"
    })


    console.log(children);
    
  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}

export default ContextProvider