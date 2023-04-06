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
  .then((conn) => {console.log("coonection successful")});
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A student must have a name"],
    unique: true,
  },
  age: {
    type: Number,
    required : true
  },
  stack: {
    type: String,
    required: [true, "A student must have a stack"],
  },
});
const Student = mongoose.model("student", studentSchema);
const student1 = new Student({
  name: "Ade Ade",
  stack : "MEAN"
});
student1
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log("there was an error", err);
  });
app.listen(port, () => {
  console.log("server is listening");
});
