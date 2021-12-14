//built in method Router is required from express using the curly braces to call it
const { Router } = require("express");
const { addUser, listUsers, updateUsers, deleteUsers } = require("./userController");
const { hashPassword, passwordMatch } =require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", passwordMatch);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUsers);
userRouter.delete("/user", deleteUsers);
//endpoint is user

module.exports = userRouter;