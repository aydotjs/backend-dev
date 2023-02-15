const http = require("http");
const fs = require("fs");
const dogNames = require("dog-names");
// console.log(fs)
// const greeting = "Hello World";
// console.log(greeting)
//SYNCHRONOUS VERSION OF READING AND WRITING FILES / BLOCKING CODE/
// const bunny = fs.readFileSync("./input.txt", "utf-8");
// console.log(bunny);
// const data = "Node js is the best backend technology"
// fs.writeFileSync("./output.txt", data )
// fs.writeFileSync("./input.txt", data)

// const p = document.querySelector("p");
// alert("Hello world");
// p.style.color = red;

// setTimeout(()=>{
//    console.log("Hello from the timer")
// }, 0)
// console.log("compliments...")

//ASYNCHRONOUS VERSION OF READING AND WRITING FILES / BLOCKING CODE/
// const bunny = fs.readFileSync("./input.txt", "utf-8");
// console.log(bunny);
// console.log("reading...");
// fs.readFile("./starter.txt", "utf-8", (err,data1) => {
//     if(err){
//         return
//     }
//     fs.readFile(`${data1}.txt`, "utf-8", (err,data2) => {
//         console.log(data2)
//         fs.writeFile('./final.txt', `${data1}\n${data2}`, "utf-8", (err)=>{
//             console.log("I just finished writing a file")
//         })
//     });
// });
// console.log("reading...");

//BUILDING OUR FIRST SERVER
//second step = creating the server
// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview") {
//     res.end("This is the overview page");
//   } else if (pathName === "/product") {
//     res.end("This is the product page");
//   } else if (pathName === "/pricing") {
//     res.end("This is the pricing page");
//   }else{
//     res.end("This page is not found ")
//   }

//   console.log("Bunny is greeting you");
// });

//starting the server
// server.listen(3000, "127.0.0.1", () => {
//   console.log("starting server");
// });
//ROUTING

//USING MODULES
// module.exports = function(x,y){
// return x + y
// }

// const textContent = fs.readFileSync("./output.txt", "utf-8")
// console.log(textContent)
// console.log("hello world")
// const randomData = "This is just a random text";
// fs.writeFileSync("./random.txt","utf-8", randomData );
// fs.writeFileSync("./read-this.txt", randomData );

// const greeter = function(){
//   console.log("Hey, how are you");
// }
// greeter()
// module.exports = function(){
//   console.log("Hey, how are you");
// }

//INTRODUCTION TO NPM AND PACKAGE.JSON

//TYPES OF PACKAGES AND TYPE OF INSTALLS
//Types of packages
//simple/regular dependencies
//development dependencies

//USING 3RD PARTY MODULES
// const femaleDogs = dogNames.all
// console.log(femaleDogs)
// console.log("hello world")
// console.log("Yet another change")
// console.log("Hello again")

//PACKAGE VERSIONING AND UPDATING

// fs.readFileSync("./final.txt", "utf-8")
// console.log("Hello")

fs.readFile("./input.txt", "utf-8", (err, data) => {
  console.log(err);
  console.log(data);
});

// fs.writeFile("./random2.txt", "hello", ()=>{
//     console.log("i just finished writing")
// })
// console.log("Hello everyone")
// setTimeout(() => {
//   console.log("1 second just passed");
//   setTimeout(() => {
//     console.log("2 second just passed");
//     setTimeout(() => {
//       console.log(" 3 second just passed");
//     }, 1000);
//   }, 1000);
// }, 1000);

//HOW THE WEB WORKS