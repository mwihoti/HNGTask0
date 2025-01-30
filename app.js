const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the api endpoint

app.get('/api', (req, res) => {
    const email = "danielmwihoti@gmail.com";
    const currentDatetime = new Date().toISOString(); // To ISO format
    

})