

const DBconnection = require("../DBconfig/connectDB");
const busesController= async (req, res) => {
  const query = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT PRIMARY KEY AUTO_INCREMENT,
      busNumber VARCHAR(20),
      totalSeats INT,
      availableSeats INT
    )
  `;

  DBconnection.query(query, (err) => {
    if (err) {
      console.log("Error creating Buses table:", err);
      return res.status(500).send("Error creating Buses table");
    }
    console.log(" Buses table created or already exists");
    res.send(" Buses table created or already exists");
  });
}

module.exports = busesController;
