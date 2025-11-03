
const express = require("express");
const { StudentIdCardController } = require("../controllers/studentIdCardController");
const studentIdCardRouter = express.Router();


studentIdCardRouter.post("/student/identityCard",StudentIdCardController)

module.exports=studentIdCardRouter