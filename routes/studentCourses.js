
const express = require("express");
const { addStudentCourses } = require("../controllers/studentcourses");


const studentCourseRouter = express.Router();

studentCourseRouter.post("/Student/Courses", addStudentCourses);

module.exports = studentCourseRouter;