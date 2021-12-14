const bcrypt = require("bcryptjs");
const User = require("..user/userModel");

exports.hasPassword = async (req, res, next) =>{
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8); //await is instructing bcrypt to wait for password to pass through and hash it
        next();
    } catch (error){
        console.log(error);
        res.status(500).send ({message: "Unsuccessful, please try again"});
    }
};