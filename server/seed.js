// seed.js
const mongoose = require("mongoose");
const Destination = require("./models/Destination");

mongoose.connect("mongodb://127.0.0.1:27017/User", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fantasyDestinations = [
    {
        theme: "Fantasy",
        images: [
            "https://example.com/fantasy_image1.jpg",
            "https://example.com/fantasy_image2.jpg",
            "https://example.com/fantasy_image3.jpg"
        ],
        description: "Explore the magical realm of fantasy worlds.",
    }
];

Destination.insertMany(fantasyDestinations)
    .then(() => {
        console.log("Fantasy destinations added!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Error adding fantasy destinations:", err);
        mongoose.connection.close();
    });
