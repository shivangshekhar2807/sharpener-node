const express = require("express");
const { addCourses } = require("../controllers/coursesController");

const courseRouter = express.Router();


courseRouter.post("/courses",addCourses)


module.exports = courseRouter;