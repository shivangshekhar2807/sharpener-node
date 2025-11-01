
const express = require("express");
require("dotenv").config();
const DBconnection = require("./DBconfig/connectDB");
const createUserTable = require("./DBtables/userTable");
const userRouter = require("./DBtables/userTable");
const busRouter = require("./DBtables/busesTable");
const bookingRouter = require("./DBtables/bookingTable");
const paymentRouter = require("./DBtables/paymentTable");
const app = express();

app.use(express.json());


DBconnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
    console.log("✅ Connected to MySQL!");
    app.listen(4444, () => {
      console.log("Server Started at port 4444");
    });

    // const query = `create table test(
    //  id int primary key,
    //  name varchar(50)
    // )`

    // DBconnection.query(query, (err) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log("table created");
    // });

  
});


app.use("/", userRouter);
app.use("/", busRouter);
app.use("/", bookingRouter);
app.use("/", paymentRouter);

app.use("/", (req, res) => {
    res.send("SQL")
})

