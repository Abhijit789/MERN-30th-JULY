import React, { useState } from 'react'

function StateWithObject() {
    let[details,setDetails]=useState({
        name:"ajay",
        age:24,
        email:"ajay@123.com",

    })
    console.log(details);

    function updateDetails(){
        setDetails((prev)=>({
            ...prev,
            name:"rohit"
        }))
    }

    function updateDetailsWithoutPrevState(){
        setDetails(()=>({
        
            name:"shaktiman"
        }))
    }
    let{name,age,email}=details;
  return (
    <>
     <h1>State Management with state</h1>
     <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{email}</li>
     </ul>
     <button className='btn btn-primary' onClick={updateDetails}>Update State</button>
     <button className='btn btn-primary ms-2' onClick={()=>updateDetailsWithoutPrevState()}>Update State Without Prev State</button>
    </>
  )
}

export default StateWithObject