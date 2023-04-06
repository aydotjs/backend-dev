const fs = require("fs");
const studentData = JSON.parse(
    fs.readFileSync("./dev-data/students-data.json", "utf-8")
  );
exports.getAllStudents = (req, res) => {
    res.json({
      status: "Success",
      expectedresult: studentData.length,
      result: { studentData },
    });
  };
  //HANDLING POST REQUEST
 exports.createNewStudents = (req, res) => {
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
 exports.getParticularStudent = (req, res) => {
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
  exports.updateStudent = (req, res) => {
    res.send("This Update has been completed");
    console.log("hello");
  };
  //HANDLING DELETE  REQUEST
exports.deleteStudent = (req, res) => {
    res.status(400).json({
      data: null,
    });
  };

