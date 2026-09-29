import { useCallback, useState } from "react"
import ChildComp from "./ChildComp";

function ParentComp() {
    let [count,setCount]=useState(0)
    let [parentCountToChild,setParentCountToChild]=useState(0)

    function incrementCount(){
        setCount(prev=>prev+1)
    }

    
        console.log("parent function");
    
    let handleClick=useCallback(()=>{
        console.log("Child button click");
        setParentCountToChild(prev=>prev+1)
        
    },[])
  return (
    <>
    <div className="conatiner my-2">
        <h2>{count}</h2>
        <button onClick={incrementCount} className="btn btn-primary">Parent Increment</button>
        <ChildComp handleClick={handleClick} parentCount={parentCountToChild}/>

    </div>
    </>
  )
}

export default ParentComp