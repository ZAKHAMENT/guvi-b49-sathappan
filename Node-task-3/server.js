const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;
const DB_URL ="mongodb+srv://sathappanramesh288:Guvi123...@cluster0.bsgotks.mongodb.net/Mentor_Student_Assigning?retryWrites=true&w=majority";


//name
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

// 1. API to create Mentor.

app.post("/mentor", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 2. API to create Student

app.post("/student", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 3. API to Assign a student to Mentor - Select one mentor and Add multiple Student 

app.post("/mentor/:mentorId/assign", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    
    // Find unassigned students
    const unassignedStudents = await Student.find({ cMentor: null, _id: { $in: req.body.students } });

    // Check if all students are unassigned
    if (unassignedStudents.length !== req.body.students.length) {
      return res.status(400).send("Some or all students are already assigned to a mentor.");
    }

    // Assign mentor to unassigned students concurrently
    await Promise.all(unassignedStudents.map(async (student) => {
      student.cMentor = mentor._id;
      await student.save();
    }));

    // Update mentor's students list without duplicates
    await Mentor.findByIdAndUpdate(req.params.mentorId, {
      $addToSet: { students: { $each: unassignedStudents.map((student) => student._id) } }
    });
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 3.2 A student who has a mentor should not be shown in List

app.get("/students/unassigned", async (req, res) => {
  try {
    const unassignedStudents = await Student.find({ cMentor: null });

    if (unassignedStudents.length === 0) {
      return res.status(404).send("No unassigned students found. All students have mentors assigned.");
    }

    res.send(unassignedStudents);
  } catch (error) {
    res.status(400).send(error);
  }
});

//4. API to Assign or Change Mentor for particular Student

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

// 5. API to show all students for a particular mentor 

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

// 6. API to show the previously assigned mentor for a particular student 

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
