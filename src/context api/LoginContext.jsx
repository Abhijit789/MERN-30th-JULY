import React, { useContext, useState } from 'react'
import UserContext from './contextConfig'

function LoginContext() {
    let{user,setUser}=useContext(UserContext);
    console.log("login user",user);
    
  return (
    <div>LoginContext</div>
  )
}

export default LoginContext