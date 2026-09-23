import React, { useState } from 'react'

function ControlledCompoent() {
    let [details,setDetails]=useState({
        name:"gangadhar",
        age:"24",
        email:"ganga@123.com"
    })

    let prefix="user";

    let user={
        [prefix+"Name"]:"gangadhar"
    }
    console.log(user);
    

    function handleChange(e){
        let{value,name}=e.target
        e.preventDefault();
        setDetails((prev)=>({
            ...prev,
            [name]:value

        }))

    }

    console.log(details);
    
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col-4">
                <form action="">
                    <input type="text" value={details.name} name="name" id="" onChange={(e)=>{handleChange(e)}} />
                    <input type="number" value={details.age} name="age" id="" onChange={(e)=>{handleChange(e)}} />
                    <input type="email" value={details.email} name="email" id=""  onChange={(e)=>{handleChange(e)}}/>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default ControlledCompoent