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
        const userEmail = await User.findOne(req.body.email);//fetching the email from db to match encrypted password to
        const match = await bcrypt.compare(password, userEmail.password); //comparing the password with new encrypted password res== true or res == false
        if (match) {
            res.status(200).send({message: "Successful log in"});
        } else {
            console.log(error);
            res.send("Username or Password Unknown");
        }
    } catch (error){
        console.log(error);
        res.status(500).send ({message: "Unsuccessful, no match found"});
    }
}
