import React, { useState } from 'react'

function ChildComp({handleClick,parentCount}) {
    let[childCount,setChildCount]=useState(0)
    console.log("Child render");
    
  return (
    <div>
        <h3>Child Component</h3>
        <h3>Child count {childCount}</h3>
        <button className='btn btn-secondary' onClick={()=>{setChildCount(prev=>prev+1)}}>Child Count</button>
        <h3>Parent count {parentCount}</h3>
        <button className='btn btn-warning' onClick={handleClick}>Child Increment Parent Count</button>
    
    </div>
  )
}

export default React.memo(ChildComp)