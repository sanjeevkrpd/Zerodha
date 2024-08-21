require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { HoldingModel } = require('./models/HoldingModel');
const app = express();

const port = process.env.PORT || 8081;  // Use a different port

const url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

app.get('/allHoldings', async (req, res) => {
    try {
        const data = await HoldingModel.find();
        res.send({ data });
    } catch (error) {
        res.status(500).send({ message: "Error Occurred" });
    }
});

app.get("/", (req, res) => {
    res.send("hello world");
});

// Connect to MongoDB and start the server
mongoose.connect(url)
    .then(() => {
        console.log("Connected to MongoDB");
       
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application if the connection fails
    });

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});