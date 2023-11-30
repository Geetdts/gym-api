const express = require("express");
const router = express.Router();
const GymAdminController = require("../controllers/gymAdminController");

router.get("/", GymAdminController.getAllUsers);
router.get("/:id", GymAdminController.getUserById);
router.post("/", GymAdminController.createGymAdmnUser);
router.put("/:id", GymAdminController.updateUser);
router.delete("/:id", GymAdminController.deleteUser);

module.exports = router;
