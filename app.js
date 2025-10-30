
const express = require("express");
require("dotenv").config();
const DBconnection = require("./DBconfig/connectDB");
const app = express();


DBconnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
    console.log("✅ Connected to MySQL!");
    app.listen(4444, () => {
      console.log("Server Started at port 4444");
    });

    const query = `create table test(
     id int primary key,
     name varchar(50)
    )`

    DBconnection.query(query, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("table created");
    });

  
});



app.use("/", (req, res) => {
    res.send("SQL")
})