import React, { useEffect, useState } from 'react'

function ApiFetching() {
    let BASE_URL=`https://jsonplaceholder.typicode.com/users`
    let[users,setUsers]=useState([])

    let [count,setCount]=useState(0)


    async function getUsers(){
        try{
            let response=await fetch(`${BASE_URL}/${count}`);
            let data=await response.json();
            setUsers(data)
        }catch{
            console.log("data not found!!");
            
        }
    }
    
    function increment(){
        setCount(prev=>prev+1)
    }
    useEffect(()=>{
      getUsers()
    },[])

    console.log(users);
    
  return (
    <>
      <div className="container my-5">
         <div className="row d-flex justify-content-around gap-4">
            
                {    
                    users.map(user=>{
                        return <div className="col-5 " key={user.id}>
                        <div className="card d-flex justify-content-between">
                            <div className="col-4">
                                <img src="" alt="" />
                            </div>
                            <div className="col-7">
                                <ul className='list-group'>
                                    <li className='list-group-item'>Name : {user.name}</li>
                                    <li className='list-group-item'>User Name :{user.username}</li>
                                    <li className='list-group-item'>Email :{user.email}</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    })
                } 
            
         </div>
         
      </div>
      <div className="btn btn-primary my-5" onClick={increment}>increment {count}</div>
    </>
  )
}

export default ApiFetching