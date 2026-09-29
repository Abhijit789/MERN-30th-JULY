import axios from "axios"

export let BASE_URL="https://jsonplaceholder.typicode.com/users"
export let API_CLIENT=axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
})

