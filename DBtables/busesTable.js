const busesController = require("../controllers/busesController");
const DBconnection = require("../DBconfig/connectDB");
const express = require("express");
const busRouter = express.Router();

busRouter.get("/buses", busesController);

module.exports = busRouter;



