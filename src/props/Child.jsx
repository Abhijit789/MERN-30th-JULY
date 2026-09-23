import React from 'react'

function Child({name,age,...props}) {
    // console.log(props);
    // let {name}=props;
    console.log(props);
    let {email,status}=props
    
    
  return (
    <div>
        <h2>Child Component</h2>
        <h3>Hey Hi {name}</h3>
        <h3>Age is {age}</h3>
        <h3>My email is {email}</h3>
        <h3>My status is {status?"Married":"Single"}</h3>
    </div>
  )
}

export default Child