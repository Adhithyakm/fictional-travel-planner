import React from 'react';
import { useParams } from 'react-router-dom';

function FantasyDetail() {
    const { id } = useParams();

    // Mock data for additional images and details
    const detailsData = {
        1: {
            images: [
              
                "https://i.pinimg.com/474x/7d/3d/e0/7d3de0d242804c71f3ed12488a4fc753.jpg",
                "https://i.pinimg.com/236x/e6/9e/16/e69e163f0d153274872e0ec3df32db1a.jpg",
                "https://i.pinimg.com/236x/cd/51/8e/cd518e535b7e222b2bab7fc649622374.jpg",
                "https://i.pinimg.com/236x/e6/9e/16/e69e163f0d153274872e0ec3df32db1a.jpg",
                "https://i.pinimg.com/236x/cd/51/8e/cd518e535b7e222b2bab7fc649622374.jpg",
                "https://i.pinimg.com/474x/7d/3d/e0/7d3de0d242804c71f3ed12488a4fc753.jpg",
                
            ],
            description: "Dive deeper into the mystical forest."
        },
        2: {
            images: [
                "https://example.com/ruins1.jpg",
                "https://example.com/ruins2.jpg"
            ],
            description: "Uncover the secrets of ancient ruins."
        }
        // Add data for each destination as needed
    };

    const detail = detailsData[id];

    return (
        <div style={{ 
          backgroundColor: '#33415c', // Set the background color
          color: 'white', // Text color for readability
          minHeight: '100vh', // Ensure it covers the full viewport height
          padding: '20px', // Padding for some space around content
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // Center align the items
          justifyContent: 'center', // Center items vertically
          textAlign: 'center' // Center the text
      }}>
            <h2 style={{ 
                fontSize: '3rem', // Increase font size
                fontStyle: 'italic', // Italicize the heading
                marginBottom: '20px' 
            }}>More About This Destination</h2>
            <p style={{ 
                fontSize: '1.5rem', // Increase font size of the description
                marginBottom: '40px' 
            }}>{detail.description}</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",justifyContent: 'center' }}>
                {detail.images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Detail ${index + 1}`} 
                        style={{ width: "200px", borderRadius: "8px" }}
                    />
                ))}
            </div>
        </div>
    );
}

export default FantasyDetail;
