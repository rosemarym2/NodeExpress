const express = require("express");

const app = express();

const port = 5000;

app.use("/home", express.static('public/index.html'));
app.use("/gift", express.static('public/giftShop.html'));
app.use("/about", express.static('public/aboutUs.html'));

app.listen(port, () =>{
    console.log("listening on port 5000");
});