
const express = require("express");
require("dotenv").config();
// const DBconnection = require("./DBconfig/connectDB");
const sequelize = require("./DBconfig/connectDB"); // Sequelize connection
const createUserTable = require("./DBtables/userTable");
const userRouter = require("./DBtables/userTable");
const busRouter = require("./DBtables/busesTable");
const bookingRouter = require("./DBtables/bookingTable");
const paymentRouter = require("./DBtables/paymentTable");
const app = express();
// const studentModel=require("./models/student");
const studentRouter = require("./routes/studentRoute");
const studentIdCardRouter = require("./routes/studentWithIdCard");
require("./models")

app.use(express.json());


(async () => {
  try {
    await sequelize.authenticate();
    console.log(" Connected to MySQL via Sequelize!");

    // Synchronize models with DB
    await sequelize.sync({ force: true });
    console.log(" Models synchronized with the database");

    // Start the server
    app.listen(4444, () => {
      console.log(" Server running on port 4444");
    });
      
  } catch (error) {
    console.error(" Database connection failed:", error);
  }
})();





app.use("/", userRouter);
app.use("/", busRouter);
app.use("/", bookingRouter);
app.use("/", paymentRouter);
app.use("/", studentRouter)
app.use("/",studentIdCardRouter)

app.use("/", (req, res) => {
    res.send("SQL")
})

