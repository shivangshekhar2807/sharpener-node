const Student = require("./student")
const identityCard = require("./identityCard")
const department = require("./department")
const courses = require("./courses")
const studentCourses=require("./student_courses")

//1:1
Student.hasOne(identityCard);
identityCard.belongsTo(Student)


//1:M
department.hasMany(Student);
Student.belongsTo(department)


//M:M
Student.belongsToMany(courses, { through: studentCourses })
courses.belongsToMany(Student, { through: studentCourses });

module.exports = { Student, identityCard, department,courses, studentCourses };