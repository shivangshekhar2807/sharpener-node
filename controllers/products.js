const path=require("path")

const productController = (req, res) => {
  res.sendFile(path.join(__dirname,"..","views","product.html"))
};

module.exports={productController}