import React, { useState } from 'react'
import Child from './Child'

function Parent() {
 let[greet,setGreet]=useState("good morning");

 function greetChild(){
    setGreet("good evening!")
 }
  return (
    <>
    <Child greet={greet} handleClick={greetChild}/>
    <button onClick={greetChild}>Greet Child</button>
    </>
  )
}

export default Parent