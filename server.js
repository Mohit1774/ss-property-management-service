require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
dbConnect();

// Routes
app.use('/api/properties', propertyRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
