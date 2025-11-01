
const {
  userController,
  insertUser,
  updateUser,
  getUser,
  deletUser,
} = require("../controllers/userController");
const DBconnection = require("../DBconfig/connectDB")
const express = require("express");
const userRouter = express.Router();



userRouter.post("/user", userController);

userRouter.post("/user/add", insertUser);

userRouter.patch("/user/update/:id", updateUser);

userRouter.get("/user", getUser);

userRouter.delete("/user/:id", deletUser);


module.exports = userRouter;