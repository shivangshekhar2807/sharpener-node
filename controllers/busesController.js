

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


const addBus = async (req, res) => {
    try {
        const { id, busNumber, totalSeats, availableSeats } = req.body;

        const addQuery = `insert into Buses (id,busNumber, totalSeats, availableSeats) values(?,?,?,?)`;

        const response = DBconnection.query(addQuery, [
          id,
          busNumber,
          totalSeats,
          availableSeats,
        ], (err, result) => {
             if (err) {
               console.error(" Error inserting bus data:", err);
               return res.status(500).send("Error inserting bus data");
             }

             console.log(" Bus inserted:", result);
             res.status(201).json({
               message: " Bus added successfully!",
               insertedId: id,
             });
        });
    }
    catch (err) {
        res.status(400).send(err)
    }
}

const getBus = async (req, res) => {
  try {
    const { seats } = req.params;

    // Validate input
    if (!seats) {
      return res
        .status(400)
        .json({ message: " Please provide a seat number in params." });
    }

    const getQuery = `SELECT * FROM Buses WHERE availableSeats > ?`;

    DBconnection.query(getQuery, [seats], (err, results) => {
      if (err) {
        console.error(" Error fetching buses:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({
            message:
              " No buses found with available seats greater than the specified number.",
          });
      }

      console.log(" Buses fetched successfully:", results);
      res
        .status(200)
        .json({ message: " Buses fetched successfully!", data: results });
    });
  } catch (error) {
    console.error(" Unexpected error:", error);
    res.status(500).json({ message: "Unexpected Server Error" });
  }
};



module.exports = { busesController, addBus, getBus };
