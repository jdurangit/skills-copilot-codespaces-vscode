// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Comments
const comments = [
    { id: 1, username: 'Alice
