const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();

app.use(bodyParser.json());

// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;

const PORT = 3000;
 const DB_URL = "mongodb://0.0.0.0:27017/Day3-task";
//const DB_URL = "mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/?retryWrites=true&w=majority";


mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.post("/mentor", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/student", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/mentor/:mentorId/assign", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const students = await Student.find({ _id: { $in: req.body.students } });

    students.forEach((student) => {
      student.cMentor = mentor._id;
      student.save();
    });

    mentor.students = [
      ...mentor.students,
      ...students.map((student) => student._id),
    ];
    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const student = await Student.findById(req.params.studentId);

    if (student.cMentor) {
      student.pMentor.push(student.cMentor);
    }

    student.cMentor = mentor._id;
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/mentor/:mentorId/students", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate(
      "students"
    );
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});


app.get("/student/:studentId/previousMentor", async (req, res) => {
    try {
      const student = await Student.findById(req.params.studentId);
  
      if (!student) {
        return res.status(404).send("Student not found");
      }
  
      const previousMentor = await Mentor.findById(student.pMentor);
  
      if (!previousMentor) {
        return res.status(404).send("Previous mentor not found");
      }
  
      res.send(previousMentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});