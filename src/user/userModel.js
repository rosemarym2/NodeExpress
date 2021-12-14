const mongoose = require("mongoose");

//models for Schema: username, email, password
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
//capital letter used, as it is the model name we are using for calling our Schema

module.exports = User; 