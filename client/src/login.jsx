import { useState } from "react";
import React from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data==="success"){
        navigate('/home')
            }
    })
        .catch(err=>console.log(err))
    }

    return(
        <div style={{ 
            backgroundColor: '#33415c', // Full screen background color
            minHeight: '100vh', // Ensure full height
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <div style={{ 
                backgroundColor: 'white', // Card background color set to white
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                width: '25%', 
                color: '#33415c' // Set text color to match the background
            }}> 
        <h2 style={{ color: 'black' }}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email" 
                      autoComplete="off"
                      name="email"
                      className="form-control rounded-0"
                      style={{
                        backgroundColor: '#006494', // Input background color
                        color: 'white' // Input text color
                    }}
                      onChange={(e) =>setEmail(e.target.value)}
                      />
                </div>
                <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          placeholder="Enter password"
                          name="password"
                          className="form-control rounded-0"
                          style={{
                            backgroundColor: '#006494', // Input background color
                            color: 'white' // Input text color
                        }}
                          onChange={(e) =>setPassword(e.target.value)}
                          />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    </form>
        </div>
        </div>
    );
}
    

export default Login;