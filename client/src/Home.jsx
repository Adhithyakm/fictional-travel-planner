import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home(){
    const [theme, setTheme] = useState(''); // State to hold selected theme
    const [destination, setDestination] = useState(''); // State to hold the search input
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        
        if (theme) {
            // Navigate to the theme-specific page based on the selected theme
            navigate(`/${theme.toLowerCase()}`);
        } else {
            alert("Please select a theme.");
        }
    };

    return(
        
        <div style={{ 
            backgroundColor: '#33415c', // Same background color as Fantasy page
            minHeight: '100vh', // Full height for the background
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center' 
        }}>
           <h2 style={{ 
                fontSize: '3rem', 
                fontStyle: 'italic', 
                color: 'white', // Your specified color
                marginBottom: '20px' 
            }}>
                Where do you want to go for a fictional journey?
            </h2>
            
            <form className="w-50" onSubmit={handleSearch} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
                <div className="mb-3">
                <label htmlFor="theme" className="form-label"><strong style={{ color: 'black' }}>Choose Your Theme</strong></label>
                    <select
                        id="theme"
                        className="form-select"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        style={{ backgroundColor: '#006494', color: 'black' }}
                    >
                        <option value="">Select a Theme</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Historical">Historical</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label"><strong style={{ color:'black' }}>Search Your Destination</strong></label>
                    <input
                        type="text"
                        id="destination"
                        className="form-control"
                        placeholder="Type a place for your fictional journey"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        style={{ backgroundColor: '#006494', color: 'white' }}
                        
                    />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: 'black', color: 'white', width: '100%' }}>Start Your Journey</button>
            </form>
        </div>
    );
}

    

export default Home; 