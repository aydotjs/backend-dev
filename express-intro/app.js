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
const fs = require("fs");
const studentData = JSON.parse(
  fs.readFileSync("./dev-data/students-data.json", "utf-8")
);
const port = 5000;
const app = express();

//INCLUDING OUR FIRST MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the second middleware");
  next()
})
app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});

//HANDLING GET REQUEST
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
  // res.status(200).json({
  //   data: {
  //     student,
  //   },
  // });
};
//HANDLING PATCH REQUEST
const updateStudent = (req, res) => {
  // res.send("This Update has been completed");
  console.log("hello")
};
//HANDLING DELETE  REQUEST
const deleteStudent = (req, res) => {
  res.status(400).json({
    data: null,
  });
};
// app.get("/api/students", getAllStudents);
// app.post("/api/students",createNewStudents );
// app.get("/api/students/:id", getParticularStudent);
// app.patch("/api/students/:id", updateStudent);
// app.delete("/api/students/:id", deleteStudent);

app.route("/api/students").post(createNewStudents).get(getAllStudents);

app
  .route("/api/students/:id")
  .get(getParticularStudent)
  .patch(updateStudent)
  .delete(deleteStudent);
  // 

  
// function test (x,y,z){
// console.log(x,y,z)
// }
// test(3)
// console.log(studentData.slice(-1)[0].id)
// console.log(studentData.at(-1).id)
app.listen(port, () => {
  console.log("server is listening");
});
