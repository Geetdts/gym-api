const db = require("../config/db");
const UserController = require("../controllers/userController");

const gymAdminController = {
  getAllUsers: (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
  },

  createGymAdmnUser: (req, res) => {
    const { username, password, userType, name, logo, tag_line, phoneNo } =
      req.body;
    db.query(
      "INSERT INTO gym_admin (user_type,username, password) VALUES (?,?, ?)",
      [username, password, userType],
      (err, results) => {
        if (err) throw err;
        res.json({
          message: "User created successfully",
          userId: results.insertId,
        });
      }
    );

    
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, userId],
      (err) => {
        if (err) throw err;
        res.json({ message: "User updated successfully" });
      }
    );
  },

  deleteUser: (req, res) => {
    const userId = req.params.id;
    db.query("DELETE FROM users WHERE id = ?", [userId], (err) => {
      if (err) throw err;
      res.json({ message: "User deleted successfully" });
    });
  },
};

module.exports = gymAdminController;
