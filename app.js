
const express = require("express");
const app = express();

app.listen(8888, () => {
    console.log("server started and listening on port 8888")
})

app.use((req, res, next) => {
    console.log("checked")
    next()
})

app.use("/test", (req, res) => {
    res.send("<h1>hello world</h1>")
})

app.use("/products", (req, res) => {
  res.send("products");
});

app.use("/categories", (req, res) => {
  res.send("categories");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});