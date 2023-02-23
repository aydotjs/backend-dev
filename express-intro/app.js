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
const app = express();
const port = 5000;
//INCLUDING OUR FIRST MIDDLEWARE
app.use(express.json())
//HANDLING GET REQUEST
app.get("/api/students", (req, res) => {
  res.json({
    status: "Success",
    expectedresult: studentData.length,
    result: { studentData },
  });
});
//HANDLING POST REQUEST
app.post("/api/students", (req, res) => {
  
console.log(typeof req.body)

res.send("Done")
})
app.listen(port, () => {
  console.log("server is listening");
});
// function test (x,y,z){
// console.log(x,y,z)
// }
// test(3)
// console.log(studentData.slice(-1)[0].id)
// console.log(studentData.at(-1).id)