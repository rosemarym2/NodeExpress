require("./db/connection");

//import express framework
const express = require("express");

//cross origin resource, install npm i cors
const cors = require("cors");

const userRouter =require("./user/userRoutes");

//create the express app
const app = express();

//port number
const port = 5000;

app.use(express.json());
app.use(cors());

app.use(userRouter);

//static files
// app.use("/home", express.static('public/index.html'));
// app.use("/gift", express.static('public/giftShop.html'));
// app.use("/about", express.static('public/aboutUs.html'));

app.listen(port, () =>{
    console.log("listening on port 5000");
});