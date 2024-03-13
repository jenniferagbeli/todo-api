// const express = require('express');
// const todosRoutes = require ('./routes/todos.routes')

import express from "express"; // open package.json // set a type to module under "main" //
import bodyParser from "body-parser";
import cors from "cors";
import todosRoutes from "./routes/todos.routes.js"

// 2 // Create An Express App //
const app = express();

// Apply middlewares // npm i body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// Use routes
app.use(todosRoutes);



// This is for when import is used // 
// app.get('/file', (req, res) => {
//     console.log(process.cwd);
//     res.sendFile(process.cwd() + "/index.html");
// });


// 3 // Listen For Incoming Requests // Last paragraph always //
app.listen(4000, () => {
    console.log("Express app is running!")
});