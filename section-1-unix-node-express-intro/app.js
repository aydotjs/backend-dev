const fs = require("fs");
const http =  require("http")
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
const server = http.createServer((req,res )=>{
res.end("Hello from the server")
})

server.listen(2500, "127.0.0.1", ()=>{
    console.log("Server has started")
} )

