import React, { useReducer } from 'react'

let initialState={users:[],loading:false,error:null}

let usersData=[
    {
        id:1,
        name:"ganagadhar",
        role:"Actor"
    },
    {
        id:2,
        name:"Shaktiman",
        role:"Actor"
    },
    {
        id:3,
        name:"Prashant",
        role:"Developer"
    },
    {
        id:4,
        name:"Sayeed",
        role:"Software Developer(MERN)"
    },
    {
        id:5,
        name:"Ramya",
        role:"Software Tester"
    },
    {
        id:6,
        name:"Tejshree",
        role:"Spy"
    },
]

function userReducer(state,action){
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                users:[...state.users,action.payload]
            }
        case "DELETE_USER":
            return {
                ...state,
                users:state.users.filter(user=>user.id !== action.payload),
                
            }
        case "CLEAR_USER":
            return {
                ...state,
                users:[],
                loading:action.payload
                
            }
    }
}

function UserApplication() {
    const[state,dispatch]=useReducer(userReducer,initialState)
     
    function addUser(user){
        // dispatch({type:"ADD_USER",payload:{name:"Vijay",role:"Developer",id:1}})
        dispatch({type:"ADD_USER",payload:user})
    }

    function deleteUser(id){
        dispatch({type:"DELETE_USER",payload:id})
    }
    function clearUsers(){
        dispatch({type:"CLEAR_USERS",payload:true})
    }
  return (
    <>
    <pre>{JSON.stringify(state.loading)}</pre>
      <div className="container">
        <div className="row">
            <div className="col">
                <ul>
                    {
                         state.loading?"loading...":state.users.map(user=><li key={user.id}>{user.id} . {user.name} {user.role} <button onClick={()=>{deleteUser(user.id)}} className='btn btn-danger ms-3 my-2'>Remove User</button></li>)
                    }
                </ul>
                <button onClick={addUser} className='btn btn-primary'>Add User</button>
            </div>
        </div>
        <div className="row">
            <h3>User List</h3>
             <ul>
                {
                    usersData.map(user=><li key={user.id}>{user.id} . <button className='btn btn-primary ms-2 my-2' onClick={()=>{addUser(user)}}>Add User</button></li>)
                }
             </ul>
        </div>
        <div className="row">
            <div className="col">
                <button onClick={clearUsers} className="btn btn-danger">Clear Users</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default UserApplication