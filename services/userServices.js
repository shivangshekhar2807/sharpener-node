const user = [
  { id: 1, name: "shivang" },
  { id: 2, name: "shekhar" },
];

const getServices = async (id) => {
  const newUser = user.filter((item) => item.id == id);
  return newUser;
};

module.exports = { getServices };
