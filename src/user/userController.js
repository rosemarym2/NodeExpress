const User = require("./userModel");

exports.addUser = async(req, res) =>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "Successfully Added User", newUser});
        //200 status code stands for everything is okay
    } catch (error){
        console.log(error);
    }
};

exports.listUsers = async(req, res) =>{
    try {
        console.log(await User.find({}));
        res.status(200).send({message: "found users"});
    } catch (error){
        console.log(error);
    }
};

exports.updateUsers = async (req, res) => {
    try {
        const user = await User.findById(req.body._id);
        console.log(await User.findByIdAndUpdate({_id: body._id}, (req.body),
            {upsert: true, new: true, runValidators: true}))
            //put method used- which updates the entire object, whereas patch just updates part of the object
            res.status(200).send({message: "Successfully Updated User", user});
    } catch (error) {
        console.log(error)
    } 
};

exports.deleteUsers = async (req, res) => {
    try {
        const user = await User.findById(req.body._id);
        console.log(await User.deleteOne(req.body))
        res.status(200).send({message: "Successfully Deleted User", user});
    } catch (error) {
        console.log(error)
        res.status(500).send ({message: "Unsuccessful, please try again"});
    } 
};