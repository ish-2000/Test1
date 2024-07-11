//import pkges
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// Define port
const PORT = process.env.PORT || 8070;

// Use JSON format
app.use(cors());
app.use(bodyParser.json());

// Import MongoDB URL
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

// Open connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success");
});

///////////////
const studentRouter = require("./routers/students.js");
app.use("/student",studentRouter);

// Listen on the port
app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});
