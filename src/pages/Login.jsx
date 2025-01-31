import React from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import axios from 'axios'



const Login = () => {

  const responseGoogle = async (response) => {
    try {
        console.log("Google Login Response:", response);
        const result = await axios.get(`http://localhost:8080/auth/google?code=${response.code}`);
        console.log("Backend Response:", result.data);
    } catch (error) {
        console.error("Google OAuth Error:", error);
    }
};

 const handleLogin = useGoogleLogin({ 
    onSuccess: responseGoogle,
    onError: (error) => console.error("Google Login Error:", error),    
    flow:'auth-code'
 })

  return (
    <div>
        <button onClick={handleLogin} >
            Login
        </button>
    </div>
  )
}

export default Login