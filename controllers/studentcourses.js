const  studentCourses  = require("../models/student_courses");
const  courses  = require("../models/courses");
const  Student  = require("../models/student")


const addStudentCourses = async (req, res) => {
    
    try {
        const { StudentId,CourseId } = req.body
        
        const student = await Student.findByPk(StudentId);

        if (!student) {
            throw new Error("Student not found")
        }

        const Course = await courses.findByPk(CourseId);
       
         if (!Course) {
           throw new Error("Course not found");
         }
        
        const student_course = await studentCourses.create({
          StudentId,
          CourseId,
        });

        res.status(201).json({
          data: student_course,
        });


    }
    catch (err) {
        res.status(400).json({
            ERROR:err.message
        })
    }
}


module.exports={addStudentCourses}