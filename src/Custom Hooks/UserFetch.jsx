
import useUserFetch from './useUserFetch'

function UserFetch() {
    let{user,error,loading}=useUserFetch("https://jsonplaceholder.typicode.com/users")
    
    if(loading){
        return <h2>Loaidng....</h2>
    }else{
        return <ul>
            {
                user.map(user=><li key={user.id}>{user.id} . {user.name} </li>)
            }
        </ul>
    }
}

export default UserFetch