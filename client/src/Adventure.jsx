import React from 'react';
import { useNavigate } from 'react-router-dom';

function Adventure() {
    const navigate = useNavigate();

    const adventureDestinations = [
        {
            id: 1,
            image: "https://i.pinimg.com/564x/d5/8c/98/d58c98c815f67d74f25e11a86f1a4844.jpg", // 
            description: "Explore the breathtaking mountains and valleys."
        },
        {
            id: 2,
            image: "https://i.pinimg.com/236x/0f/8c/08/0f8c0891641da769c6e1d80d6d9aa71e.jpg",
            description: "Discover hidden waterfalls and lush jungles."
        },
        {
            id: 3,
            image: "https://i.pinimg.com/236x/1e/ed/a0/1eeda0c05b52c4754a9c6ae4c312b151.jpg",
            description: "Experience thrilling adventures in the wild."
        },
        {
            id: 4,
            image: "https://i.pinimg.com/236x/1e/ed/a0/1eeda0c05b52c4754a9c6ae4c312b151.jpg",
            description: "Enjoy stunning views from the treetops."
        }
    ];

    return (
        <div style={{ 
            backgroundColor: '#33415c', 
            minHeight: '100vh', 
            padding: '20px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center' 
        }}>
            <h2 style={{ fontSize: '3rem', fontStyle: 'italic', color: 'white' }}>
                Welcome to the Adventure World
            </h2>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'white' }}>
                Discover exciting destinations full of adventure!
            </p>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: 'center' }}>
                {adventureDestinations.map((destination) => (
                    <div key={destination.id} style={{ width: "250px", textAlign: "center" }}>
                        <img 
                            src={destination.image} 
                            alt={`Adventure destination ${destination.id}`} 
                            style={{ width: "100%", height: "200px", borderRadius: "8px", objectFit: "cover" }} 
                        />
                        <p style={{ margin: '10px 0', color: 'white' }}>{destination.description}</p>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => navigate(`/adventure/detail/${destination.id}`)}
                            style={{ backgroundColor: '#002855', color: 'white', borderRadius: '5px', padding: '10px 15px', border: 'none' }}
                        >
                            Explore More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adventure;
