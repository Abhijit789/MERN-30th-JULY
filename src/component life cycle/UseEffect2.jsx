import React, { useEffect, useState } from 'react'

function UseEffect2() {
    // mounting phase
    let[count1,setCount1]=useState(0);
    let[count2,setCount2]=useState(0)
     function increment1(){
        setCount1(prev=>prev+1)
     }

     function increment2(){
        setCount2(prev=>prev+1)
     }
    useEffect(()=>{
        console.log("UseEffect2 mounted");
    },[])

    useEffect(()=>{
        console.log(`count1 is updated ${count1}`);
        
    },[count1])

    
    useEffect(()=>{
        console.log(`count2 is updated ${count2}`);
        
    },[count2])
  return (
    <div className="container my-5">
    <button className='btn btn-primary my-2 ms-2' onClick={increment1}>count1 {count1}</button>
    <button className='btn btn-primary my-2 ms-2' onClick={increment2}>count2 {count2}</button>
    </div>
  )
}

export default UseEffect2