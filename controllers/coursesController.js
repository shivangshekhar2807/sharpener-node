const course = require("../models/courses");



const addCourses = async (req, res) => {
    try {
        const { courseName } = req.body;

        const Course = await course.create({ courseName });

        res.status(201).json({
          data: Course
        });

    }
    catch (err) {
        res.status(400).json({
            ERROR:err.message
        })
    }
    
}


module.exports={addCourses}