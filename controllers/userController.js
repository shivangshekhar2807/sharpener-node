const { getServices } = require("../services/userServices");


const user = [
  { id: 1, name: "shivang" },
  { id: 2, name: "shekhar" },
];

 const postUser = async(req, res) => {
  console.log(req.body);
  const { id, name } = req.body;

  const obj = {
    id: id,
    name: name,
  };

  user.push(obj);

  res.send("user added");
};


 const getUser =  async(req, res) => {
  const { id } = req.params;

  const newuser =await getServices(id)
  res.json({ user: newuser });
};

module.exports = { postUser, getUser };