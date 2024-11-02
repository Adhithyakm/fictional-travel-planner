const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
    theme: String,
    images: [String],  // Array of image URLs
    description: String,
});

const Destination = mongoose.model("Destination", DestinationSchema);
module.exports = Destination;
