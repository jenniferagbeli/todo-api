const express = require('express');

// 2 // Create An Express App //
const app = express();

// 4 // Define Your Route //
app.get('/', (req, res) => {
    // console.log(req.headers, req.query);
    res.send("Relax!");
});


app.get('/ping', (req, res) => {
    res.send("Ping Pong!");
});

app.get('/file', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

// This is for when import is used //
// app.get('/file', (req, res) => {
//     console.log(process.cwd);
//     res.sendFile(process.cwd() + "/index.html");
// });


// 3 // Listen For Incoming Requests // Last paragraph always //
app.listen(4000, () => {
    console.log("Express app is running!")
});