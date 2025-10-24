const express = require("express");
const userRouter = express.Router();


const user = [
  { id: 1, name: "shivang" },
  { id: 2, name: "shekhar" },
];

userRouter.post("/add/users", (req, res) => {
  console.log(req.body);
  const { id, name } = req.body;

  const obj = {
    id: id,
    name: name,
  };

  user.push(obj);

  res.send("user added");
});

userRouter.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const newuser = user.filter((item) => item.id == id);
  res.json({ user: newuser });
});

module.exports = userRouter;