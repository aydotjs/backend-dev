const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const port = 5000;
dotenv.config({
  path: "./config.env",
});
console.log("===Node environment vars stars from here ====");
mongoose
  .connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    console.log("coonection successful");
  });
app.listen(port, () => {
  console.log("server is listening");
});
