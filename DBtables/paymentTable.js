
const paymentController = require("../controllers/paymentController");
const DBconnection = require("../DBconfig/connectDB");
const express = require("express");
const paymentRouter = express.Router();

paymentRouter.get("/payments", paymentController);

module.exports = paymentRouter;
