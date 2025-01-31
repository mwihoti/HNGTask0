const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the api endpoint

app.get('/', (req, res) => {
    const email = "danielmwihoti@gmail.com";
    const current_datetime = new Date().toISOString(); // To ISO format
    const github_url = "https://github.com/mwihoti/HNGTask0";

    const response = {
        email,
        current_datetime,
        github_url
    };
    res.status(200).json(response);

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})