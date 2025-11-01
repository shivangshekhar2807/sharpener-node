
const bookingController = require("../controllers/bookingController");
const DBconnection = require("../DBconfig/connectDB");
const express = require("express");
const bookingRouter = express.Router();

bookingRouter.get("/bookings", bookingController);

module.exports = bookingRouter;
