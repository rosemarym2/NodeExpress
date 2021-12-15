const bcrypt = require("bcrypt");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) =>{
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8); //await is instructing bcrypt to wait for password to pass through and hash it
        next();
    } catch (error){
        console.log(error);
        res.status(500).send ({message: "Unsuccessful, please provide a valid password"});
    }
};

exports.passwordMatch = async (req, res) =>{
    try {
        const userEmail = await User.findOne({ email: req.body.email, username: req.body.username });
        //fetching the email and username from db to match encrypted password to
        const match = await bcrypt.compare(req.body.password, userEmail.password); 
        //comparing the password with new encrypted password res == true or res == false
        if (match) {
            res.status(200).send({message: `Successful log in, hello ${req.body.username}`});
        } else {
            res.status(500).send({message: "Username or Password Unknown"});
        }
    } catch (error){
        console.log(error);
        res.status(500).send ({message: "Unsuccessful, no match found"});
    }
}

exports.validEmail = async (req, res) =>{
    try {
        const regex = /.+\@.+\..+/; //string email pattern 
        if (regex.test(req.body.email)) {
            res.status(200).send({message: `${req.body.email} is a valid email`});
            //testing that the string email pattern is matching to various tokens found in a commonly formatted email address 
        } else {
            res.status(400).send({message: `${req.body.email} is not a valid email`});
            //http 400 = Bad Request, the client should not repeat this request without modification
        }
    } catch (error){
        console.log(error);
        res.status(500).send ({message: "Unsuccessful, no match found"});
    }
}
