import React, { useState } from 'react'

function Counter() {
  let[count,setCount]=useState(0)
  console.log("state",count);

  function incrementCount(){
       setCount(count+1)
  }
  function incrementCountByFive(payload){
    setCount(count+payload)
  }

  function incrementCountByTen(payload){
    setCount(count+payload)
  }
  
  return (
    <>
     <h2>Counter Application</h2>
     <h3>Count : {count}</h3>
     <button className='btn btn-warning' onClick={incrementCount}>Increment {count}</button>
     <button className='btn btn-warning ms-2' onClick={()=>{incrementCountByFive (5)}}>IncrementByFive {count}</button>
     <button className='btn btn-warning ms-2' onClick={()=>{incrementCountByTen(10)}}>IncrementByTen {count}</button>
    </>
  )
}

export default Counter