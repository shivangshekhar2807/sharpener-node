const DBconnection = require("../DBconfig/connectDB");

 const bookingController=async (req, res) => {
  const query = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT PRIMARY KEY AUTO_INCREMENT,
      seatNumber INT
    )
  `;

  DBconnection.query(query, (err) => {
    if (err) {
      console.log(" Error creating Bookings table:", err);
      return res.status(500).send("Error creating Bookings table");
    }
    console.log("✅ Bookings table created or already exists");
    res.send(" Bookings table created or already exists");
  });
 };


 module.exports = bookingController;
