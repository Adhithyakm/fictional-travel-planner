import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
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
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            style={{
                                backgroundColor: '#006494', // Input background color
                                color: 'white' // Input text color
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            style={{
                                backgroundColor: '#006494', // Input background color
                                color: 'white' // Input text color
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            style={{
                                backgroundColor: '#006494', // Input background color
                                color: 'white' // Input text color
                            }}cd 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
