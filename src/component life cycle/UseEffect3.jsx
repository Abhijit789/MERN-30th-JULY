import React, { useEffect, useState } from 'react'

function UseEffect3() {

    // unmouting phase

    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)

    useEffect(()=>{
        console.log("every time it will render");
        
    })

    useEffect(()=>{
        console.log("component Mounting");
        
    },[])

    useEffect(()=>{
        let timer=setInterval(()=>{
           setCount(prev=>prev+1)
           console.log("count",count);
           
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[count])
  return (
    <>
     count :{count}

    </>
  )
}

export default UseEffect3