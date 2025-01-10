const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const apiRouter = require('./api');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));





// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
