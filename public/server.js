// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//declare static path
let staticPath = path.join(__dirname);

//initializing express.js

const app = express();

//middlewares
app.use(express.static(staticPath));


//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath,"index.html"));
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})
