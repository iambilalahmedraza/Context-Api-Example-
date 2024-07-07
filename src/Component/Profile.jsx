import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
//import Login from './login'
function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div>please login </div>

    return <div className='bg-slate-900 text-yellow-100 text-3xl'> welcome {user.username}</div>
  
}

export default Profile
