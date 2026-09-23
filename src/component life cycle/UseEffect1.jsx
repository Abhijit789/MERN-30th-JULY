import React, { useState } from 'react'

function UseEffect1() {
    // console.log("Initial phase");
    let [count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(0);

    console.log("count 1",count1);
    console.log("count 2",count2);

    function incrementCount1(){
        setCount1(prev=>prev+1)
        // setCount1(prev=>prev+1)
    }

    function incrementCount2(){
        setCount2(prev=>prev+1)
        // setCount1(prev=>prev+1)
    }

    return (
    <>
     <div className="container my-5">
        <div className="btn btn-primary" onClick={incrementCount1}>Increment count1 - {count1}</div>
        <div className="btn btn-primary ms-2" onClick={incrementCount2}>Increment count2 - {count2}</div>
     </div>
    </>
  )
}

export default UseEffect1