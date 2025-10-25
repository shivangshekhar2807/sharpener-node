const express = require("express");
const productRouter = express.Router();
const product=require("../controllers/products")

productRouter.get("/products", product.productController)


module.exports = productRouter;