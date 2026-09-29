import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiFetchingUisngAxios() {
    let BASE_URL = "https://jsonplaceholder.typicode.com/users"
    let [users, setUsers] = useState([]);

    async function getUsers() {
        try {
            
            let response = await axios.get(BASE_URL);
            let data =await response.data
            if (!response.status === 200) {
                
                return new Error("404 data is not found")
                
                
            }else{
                console.log(data);
                setUsers(data)
            }

            // let data=response.data
        } catch {
            console.error("error data is not found!");

        }
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>ApiFetchingUisngAxios</div>
    )
}

export default ApiFetchingUisngAxios