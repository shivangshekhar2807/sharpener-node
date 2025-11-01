
const DBconnection = require("../DBconfig/connectDB");

const paymentController=async (req, res) => {
  const query = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT PRIMARY KEY AUTO_INCREMENT,
      amountPaid DECIMAL(10,2),
      paymentStatus VARCHAR(20)
    )
  `;

  DBconnection.query(query, (err) => {
    if (err) {
      console.log(" Error creating Payments table:", err);
      return res.status(500).send("Error creating Payments table");
    }
    console.log(" Payments table created or already exists");
    res.send(" Payments table created or already exists");
  });
}

module.exports = paymentController;