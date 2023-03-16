const express = require("express");
const fs = require("fs");
const studentData = JSON.parse(
    fs.readFileSync("./dev-data/students-data.json", "utf-8")
  );
const getAllStudents = (req, res) => {
    res.json({
      status: "Success",
      expectedresult: studentData.length,
      result: { studentData },
    });
  };
  //HANDLING POST REQUEST
  const createNewStudents = (req, res) => {
    const newId = studentData.at(-1).id + 1;
    const newStudent = Object.assign({ id: newId }, req.body);
    studentData.push(newStudent);
    fs.writeFile(
      `${__dirname}/dev-data/students-data.json`,
      JSON.stringify(studentData),
      (err) => {
        console.log("We are done writing..");
      }
    );
    // console.log(newId)
    // const newId = studentData.length - 1
    res.send("We are done posting");
  };
  //RESPONDING TO PARAMETERS
  const getParticularStudent = (req, res) => {
    if (+req.params.id > studentData.length) {
      return res.status(404).json({
        result: "Request failed",
      });
    }
    // req.params.bunny
    const student = studentData.find((currentEl) => {
      return currentEl.id === +req.params.id;
    });
    res.status(200).json({
      data: {
        student,
      },
    });
  };
  //HANDLING PATCH REQUEST
  const updateStudent = (req, res) => {
    res.send("This Update has been completed");
    console.log("hello");
  };
  //HANDLING DELETE  REQUEST
  const deleteStudent = (req, res) => {
    res.status(400).json({
      data: null,
    });
  };
const router = express.Router()
router.route("/").post(createNewStudents).get(getAllStudents);

router
  .route("/:id")
  .get(getParticularStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

  module.exports = router