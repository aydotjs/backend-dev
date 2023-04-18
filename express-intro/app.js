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

app.use("/api/students", studentRouter);
// node

// function test (x,y,z){
// console.log(x,y,z)
// }
// test(3)
// console.log(studentData.slice(-1)[0].id)
// console.log(studentData.at(-1).id)
module.exports = app;
