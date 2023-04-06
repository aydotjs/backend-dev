const express = require("express");
const router = express.Router();
const {
  createNewStudents,
  getAllStudents,
  getParticularStudent,
  updateStudent,
  deleteStudent,
} = require("../Controllers/studentController");
router.route("/").post(createNewStudents).get(getAllStudents);
router
  .route("/:id")
  .get(getParticularStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
