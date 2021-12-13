//built in method Router is required from express using the curly braces to call it
const { Router } = require("express");
const { addUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);
//endpoint is user

module.exports = userRouter;