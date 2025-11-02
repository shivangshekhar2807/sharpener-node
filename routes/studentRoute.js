
const express = require("express");
const { addStudent, updateStudent, deleteStudent } = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.post("/student",addStudent)

studentRouter.patch("/student/update/:id", updateStudent);

studentRouter.delete("/Student/delete/:id", deleteStudent);

module.exports=studentRouter