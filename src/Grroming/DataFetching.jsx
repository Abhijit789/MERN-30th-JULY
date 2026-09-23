import { useState } from "react"

function DataFetching() {
let[data,setData]=useState([])

async function getData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await response.json();
        setData(data);
    }catch{
        console.log("data not found");
        
    }
}

console.log(data);

  return (
    <div></div>
  )
}

export default DataFetching