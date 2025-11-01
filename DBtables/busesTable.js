const {
  busesController,
  addBus,
  getBus,
} = require("../controllers/busesController");
const DBconnection = require("../DBconfig/connectDB");
const express = require("express");
const busRouter = express.Router();

busRouter.post("/buses", busesController);

busRouter.post("/bus/add", addBus);

busRouter.get("/bus/get/:seats", getBus);

module.exports = busRouter;



