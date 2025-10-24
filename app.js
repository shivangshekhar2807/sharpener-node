
const express = require("express");
const app = express();

app.listen(8888, () => {
    console.log("server started and listening on port 8888")
})


app.use("/test", (req, res) => {
    res.send("<h1>hello world</h1>")
})