const express = require('express');
const app = express();
const port = 8000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// In-memory storage (in a real app, this would be a database)
const users = [];
const medicines = [
    {
        id: 1,
        name: "Paracetamol",
        description: "500mg Tablets",
