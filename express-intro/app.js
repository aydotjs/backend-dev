// const http = require("http");
// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === "/overview") {
//     res.end("This is the overview page");
//   } else if (pathName === "/products") {
//     res.end("This is the product page");
//   }
// });
// server.listen(8000, () => {
//   console.log("Server is listening");
// });
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.status(404).send("Hello from the server side");
// });
// app.get("/overview", (req, res) => {
//   res.send("This is the overview page");
// });
// app.get("/products", (req, res) => {
//   res.status(200).send("This is the product  page");
// });
// app.post("/", (req, res) => {
//   res.send("This is us making a post request");
// });
// app.post("/overview", (req, res) => {
//   res.send("This is us making a post request on the overview");
// });
// const port = 4000;
// app.listen(port, () => {
//   console.log("Server has started");
// });
//APIS AND RESTFUL API DESIGN
//HANDLING GET REQUEST
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./Routes/studentRoute")

const port = 5000;
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
    message : "resource is not available right now"
  })
};
const createNewTeachers = (req, res) => {
  res.status(501).json({
    message : "resource is not available right now"
  })
};
const updateTeacher = (req, res) => {
  res.status(501).json({
    message : "resource is not available right now"
  })
};
const getParticularTeacher = (req, res) => {
  res.status(501).json({
    message : "resource is not available right now"
  })
};
const deleteTeacher = (req, res) => {
  res.status(501).json({
    message : "resource is not available right now"
  })
};
// app.get("/api/students", getAllStudents);
// app.post("/api/students",createNewStudents );
// app.get("/api/students/:id", getParticularStudent);
// app.patch("/api/students/:id", updateStudent);
// app.delete("/api/students/:id", deleteStudent);

app.use("/api/students",studentRouter)

//

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
app.listen(port, () => {
  console.log("server is listening");
});
