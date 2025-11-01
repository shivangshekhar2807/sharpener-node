
const DBconnection = require("../DBconfig/connectDB");
const userController=async(req, res) => {
    
    const userQuery = `CREATE TABLE IF NOT EXISTS  BusUser(
  id int primary key,
  name varchar(50),
  email varchar(50)
)`;

    const createUserTable = DBconnection.query(userQuery, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("user atble created");
    });


}

const insertUser = async (req, res) => {

    const { id, name, email } = req.body;

    const insertQuery = `insert into BusUser (id,name,email) values(?,?,?)`;

    const response = DBconnection.query(
      insertQuery,
      [id, name, email],
      (err, result) => {
        if (err) {
          console.log(" Error inserting data:", err);
          return res.status(500).send("Error inserting data into BusUser");
        }
        console.log(" Data inserted:", result);
        res.send(" User inserted successfully!");
      }
    );
    
    
}


const updateUser = async (req, res) => {
    try { 
      const { id } = req.params;

     
      const { name, email } = req.body;

      
      if (!id || !name || !email) {
        return res
          .status(400)
          .json({ message: " Please provide id, name, and email" });
      }
        
        const updateQuery = `update BusUser set name=?,email=? where id=?`
        
        const response = DBconnection.query(
          updateQuery,
          [name, email, id],
          (err, result) => {
            if (err) {
              console.error(" Error updating user:", err);
              return res.status(500).send("Error updating user");
            }

            // Check if any row was actually updated
            if (result.affectedRows === 0) {
              return res
                .status(404)
                .json({ message: " No user found with that ID" });
            }

            console.log(" User updated:", { id, name, email });
            res.status(200).json({
              message: " User updated successfully!",
              updatedId: id,
            });
          }
        );
    } catch (error) {
      console.error(" Unexpected error:", error);
      res.status(500).send("Internal server error");
    }
}


const getUser = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM BusUser`;

    DBconnection.query(selectQuery, (err, results) => {
      if (err) {
        console.error(" Error fetching users:", err);
        return res.status(500).send("Error fetching users from BusUser table");
      }

     
      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: " No users found in BusUser table" });
      }

      console.log(" Users fetched:", results);
      res.status(200).json({
        message: " Users retrieved successfully!",
        totalUsers: results.length,
        data: results,
      });
    });
  } catch (error) {
    console.error(" Unexpected error:", error);
    res.status(500).send("Internal server error");
  }
};



const deletUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: " User ID is required" });
    }

    const deleteQuery = `DELETE FROM BusUser WHERE id = ?`;

    DBconnection.query(deleteQuery, [id], (err, result) => {
      if (err) {
        console.error(" Error deleting user:", err);
        return res.status(500).send("Error deleting user");
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: " No user found with that ID" });
      }

      console.log("🗑️ User deleted successfully:", id);
      res.status(200).json({
        message: " User deleted successfully!",
        deletedId: id,
      });
    });
  } catch (error) {
    console.error(" Unexpected error:", error);
    res.status(500).send("Internal server error");
  }
};
module.exports = { userController, insertUser, updateUser, getUser, deletUser };