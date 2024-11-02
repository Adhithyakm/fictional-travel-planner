import React from 'react';
import { useNavigate } from 'react-router-dom';

function Fantasy() {
    const navigate = useNavigate();

    const fantasyDestinations = [
        {
            id: 1,
            image: "https://i.pinimg.com/564x/58/4c/19/584c19801a64c5f5f198b6c441d0cf7e.jpg",
            description: "A mystical forest where magic comes alive."
        },
        {
            id: 2,
            image: "https://www.disneytouristblog.com/wp-content/uploads/2023/10/mickey-minnie-statues-cinderella-castle-magic-kingdom-disney-world-247.jpg",
            description: "Ancient ruins filled with untold secrets."
        },
        {
            id: 3,
            image: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/05/mermaid-castle.jpg.webp",
            description: "A castle in the clouds with enchanted treasures."
        },
        {
            id: 4,
            image: "https://www.disneytouristblog.com/wp-content/uploads/2024/07/hotel-fantasy-springs-tokyo-disneysea-japan-234.jpg",
            description: "A serene lake surrounded by magical creatures."
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
            <h2 style={{ fontSize: '3rem', fontStyle: 'italic', color: 'white' }}>Welcome to the Fantasy World</h2>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'white' }}>Explore magical destinations filled with wonder and adventure!</p>
            
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: 'center' }}>
                {fantasyDestinations.map((destination) => (
                    <div key={destination.id} style={{ width: "250px", textAlign: "center" }}>
                        <img 
                            src={destination.image} 
                            alt={`Fantasy destination ${destination.id}`} 
                            style={{ width: "100%", height: "200px", borderRadius: "8px", objectFit: "cover" }} 
                        />
                        <p style={{ margin: '10px 0', color: 'white' }}>{destination.description}</p>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => navigate(`/fantasy/detail/${destination.id}`)}
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

export default Fantasy;
