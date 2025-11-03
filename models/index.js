const Student = require("./student")
const identityCard = require("./identityCard")
const department=require("./department")

//1:1
Student.hasOne(identityCard);
identityCard.belongsTo(Student)


//1:M
department.hasMany(Student);
Student.belongsTo(department)

module.exports = { Student, identityCard, department };