const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "A student must have a name"],
      unique: true,
    },
    age: {
      type: Number,
      required : true,
       default : 18,
    },
    stack: {
      type: String,
      required: [true, "A student must have a stack"],
    },
  });
  const Student = mongoose.model("student", studentSchema);
  module.exports = Student;
  