const Student = require("./../Model/studentModel");
//HANDLING THE GET REQUEST
exports.getAllStudents = (req, res) => {
  const allStudents = Student.find();
  allStudents
    .then((students) => {
      res.status(200).json({
        message: "Students information successfully delivered",
        data: students,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Students information not delivered",
        error: `${err}`,
      });
    });
};
//HANDLING POST REQUEST

exports.createNewStudents = async (req, res) => {
  try {
    const student1 = new Student(req.body);
    const document = await student1.save();
    res.json({
      message: "We are done posting",
      data: document,
    });
    /*
      .then((doc) => {
        console.log(doc);
      })
      .catch(() => {
        console.log("there was an error");
      });
    res.json({
      message: "We are done posting",
    });
    */
  } catch (err) {
    res.json({
      errorObj: err,
      message: "there was an error",
    });
  }
};
//RESPONDING TO PARAMETERS
exports.getParticularStudent = async (req, res) => {
  try{
    const student = Student.findById(req.params.id);
    const particularStudent = await student;
    res.status(200).json({
      message: "Students information successfully delivered",
      data: particularStudent,
    });
  }catch(err){
    res.status(404).json({
      message: "Students information not found",
      data: particularStudent,
    });
  }

};

//HANDLING PATCH REQUEST
exports.updateStudent = (req, res) => {
  const updatedInfo = Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  updatedInfo
    .then((studentUpdate) => {
      res.status(200).json({
        message: "Students information successfully delivered",
        data: studentUpdate,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Students information failed to update",
        error: err,
      });
    });
};
//HANDLING DELETE  REQUEST
exports.deleteStudent = (req, res) => {
  const deleteInfo = Student.findByIdAndDelete(req.params.id);
  deleteInfo
    .then(() => {
      res.status(204).json({
        message: "Document has been successfully deleted",
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Document failed to delete",
      });
    });
};

