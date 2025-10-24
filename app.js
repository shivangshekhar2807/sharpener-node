
const express = require("express");
const app = express();

app.listen(8888, () => {
    console.log("server started and listening on port 8888")
})

const user = [
    { id: 1, name: "shivang" },
    {id:2,name:"shekhar"}
]

app.use(express.json());

app.use((req, res, next) => {
    console.log("checked")
    next()
})

app.use("/custom-middleware", (req, res, next) => {
    console.log("custom-middleware")
    req.body={name:"shivang"}
    next();
})

app.get("/custom-middleware", (req, res) => {
    const {name}=req.body
    res.send(`custom-middlewqre ${name}`)
});

app.use("/test", (req, res) => {
    res.send("<h1>hello world</h1>")
})

app.use("/products", (req, res) => {
  res.send("products");
});

app.use("/categories", (req, res) => {
  res.send("categories");
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const newuser=user.filter((item)=>item.id==id)
  res.json({ user: newuser });
});



app.post("/add/users", (req, res) => {
    console.log(req.body)
    const { id, name } = req.body
    
    const obj = {
        id: id,
        name:name
    }

    user.push(obj);

    res.send("user added")
})

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});