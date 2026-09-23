import React from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent() {
    let userDetails={
        name:"gangadhar",
        age:54,
        
    }
    let style={
        color:"red",
        height:"200px",
        width:"200px",
        border:"none",
        boxShadow:"0px 0px 5px grey,0px 0px 10px grey"
    }
  return (
    <div>
        <h2>Parent Compoent</h2>
        <Child name="ajay" age={23} email="ajay@123.com" status={true}/>
        <Child2 user={userDetails} style={style}/>
    </div>
  )
}

export default Parent