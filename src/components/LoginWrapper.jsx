import React from 'react'
import { useNavigate } from 'react-router-dom'




const LoginWrapper = () => {

    const navigate=useNavigate();


  return (
    <div className='container border p-2'>
        <button className="btn btn-primary btn-lg m-3 px-3 border border-3"
        onClick={()=> navigate('/register')}
        >Register</button>
        
        <button className="btn btn-primary btn-lg px-3 border border-3"
        onClick={()=>navigate('/login')}
        >Login</button>
    </div>
  )
}

export default LoginWrapper