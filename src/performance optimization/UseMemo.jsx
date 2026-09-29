import { useMemo, useState } from "react"


function UseMemo() {
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(10)

    let heavyCalculation=useMemo(()=>{
        console.log("Heavycalculation is rendering");
        
        let result=0;
        for(let i=0;i<1000000000;i++){
            result=+i;
            
        }
        return result+count2;
    },[count2])


  return (
    <div className="container my-2">
        <h3>count-1 {count1}</h3>
        <button onClick={()=>{setCount1(prev=>prev+1)}}>Increment 1</button>
        <h3>count-2 {count2}</h3>
        <button onClick={()=>{setCount2(prev=>prev+1)}}>Increment 2</button>
        <h4>Heavy Calculation {heavyCalculation}</h4>

    </div>
  )
}

export default UseMemo
