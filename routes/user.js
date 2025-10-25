const express = require("express");
const userController=require("../controllers/userController")
const userRouter = express.Router();



userRouter.post("/add/users", userController.postUser);

userRouter.get("/users/:id", userController.getUser);

module.exports = userRouter;