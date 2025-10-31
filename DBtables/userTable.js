
const DBconnection = require("../DBconfig/connectDB")
const express = require("express");
const userRouter = express.Router();



userRouter.get("/user", async(req, res) => {
    
    const userQuery = `create table BusUser(
  id int primary key,
  name varchar(50),
  email varchar(50)
)`;

    const createUserTable = DBconnection.query(userQuery, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("user atble created");
    });

    
})


module.exports = userRouter;