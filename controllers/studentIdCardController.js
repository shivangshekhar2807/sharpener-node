const { Student, identityCard } = require("../models");


const StudentIdCardController = async (req, res) => {
    try {
        const student = await Student.create(req.body.student)
        const idCard = await identityCard.create({
            ...req.body.identityCard,
            StudentId:student.id
        })

        res.status(201).json({
            data:idCard
        })

       
    }
    catch (err) {
        res.status(400).json({
            ERROR:err.message
        })
    }
}

module.exports = {StudentIdCardController};