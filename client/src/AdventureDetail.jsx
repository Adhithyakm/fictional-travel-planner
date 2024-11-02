import React from 'react';
import { useParams } from 'react-router-dom';

function AdventureDetail() {
    const { id } = useParams();

    // Mock data for additional images and details
    const detailsData = {
        1: {
            images: [
                "https://i.pinimg.com/474x/5a/0f/de/5a0fde883c2d60be51a8a5cdfa4df392.jpg", // Replace with actual URLs
                "https://i.pinimg.com/236x/9d/84/c6/9d84c6013406ad5bc9306167e0054757.jpg",
                "https://i.pinimg.com/474x/bb/e2/a5/bbe2a52e09dd5008453ca1233d766447.jpg",
                "https://i.pinimg.com/236x/9d/84/c6/9d84c6013406ad5bc9306167e0054757.jpg",
                "https://i.pinimg.com/474x/5a/0f/de/5a0fde883c2d60be51a8a5cdfa4df392.jpg"
            ],
            description: "Explore the thrilling mountains filled with adventures."
        },
        2: {
            images: [
                "https://example.com/adventure2a.jpg",
                "https://example.com/adventure2b.jpg"
            ],
            description: "Experience the depths of mysterious caves."
        },
        3: {
            images: [
                "https://example.com/adventure3a.jpg",
                "https://example.com/adventure3b.jpg"
            ],
            description: "Raft down the wild rivers of untamed landscapes."
        },
        4: {
            images: [
                "https://example.com/adventure4a.jpg",
                "https://example.com/adventure4b.jpg"
            ],
            description: "Hike through the stunning wilderness teeming with life."
        }
        // Add more data as needed for each adventure destination
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
            }}>More About This Adventure</h2>
            <p style={{ 
                fontSize: '1.5rem', // Increase font size of the description
                marginBottom: '40px' 
            }}>{detail.description}</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: 'center' }}>
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

export default AdventureDetail;
