const student=require("../models/student")


const addStudent = async (req, res) => {
    try {
        const { name, email } = req.body;
        
        const resp = await student.create({
            name,email
        })

        res.status(201).json({
            message:"Student created",
            result:resp
        })
    }
    catch (err) {
        res.status(400).json({
           ERROR:err.message
       })
    }
}


const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        // const { name, email } = req.body;

        const user = await student.findByPk(id);

        if (!user) {
            throw new Error("user not found")
        }

        console.log(user)

        Object.keys(req.body).forEach((key) => user[key] = req.body[key])
        
       const updated= await user.save();

       res.status(200).json({
         message: "User updated successfully",
         updatedUser: updated,
       });



    }
    catch (err) {
        res.status(400).json({
           ERROR:err.message
        })
    }
}


const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await student.findByPk(id);
          if (!user) {
            throw new Error("user not found");
          }
        
        const deleted = await user.destroy();
         res.status(200).json({
           message: "User deleted successfully",
           deletedUser: deleted,
         });


    }
    catch (err) {
        res.status(400).json({
          ERROR: err.message,
        });
    }
}


module.exports = { addStudent, updateStudent, deleteStudent };