const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./Routes/studentRoute");

const app = express();

//INCLUDING OUR FIRST MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the  middleware");
  next();
});
app.use(morgan("dev"));
//HANDLING GET REQUEST

//HANDLER FUNCTIONS FOR TEACHER RESOURCE
const getAllTeachers = (req, res) => {
  res.status(501).json({
    message: "resource is not available right now",
  });
};
const createNewTeachers = (req, res) => {
  res.status(501).json({
    message: "resource is not available right now",
  });
};
const updateTeacher = (req, res) => {
  res.status(501).json({
    message: "resource is not available right now",
  });
};
const getParticularTeacher = (req, res) => {
  res.status(501).json({
    message: "resource is not available right now",
  });
};
const deleteTeacher = (req, res) => {
  res.status(501).json({
    message: "resource is not available right now",
  });
};
app.use("/api/students", studentRouter);
app.route("/api/teachers").post(createNewTeachers).get(getAllTeachers);
app
  .route("/api/teachers/:id")
  .get(getParticularTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);

// function test (x,y,z){
// console.log(x,y,z)
// }
// test(3)
// console.log(studentData.slice(-1)[0].id)
// console.log(studentData.at(-1).id)
module.exports = app;
