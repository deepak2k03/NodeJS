import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
  console.log("Connected to MongoDB");
});

app.post("/save", async (req, res) => {
  const { name, age, grade } = req.body;
  if (!name || !age || !grade) {
    res.send({
      message: "Data Not Saved",
      success: false,
      storedInfo: NULL,
    });
    return false;
  }
  const studentData = await studentModel.create(req.body);
  res.send({
    message: "Data saved successfully",
    success: true,
    storedInfo: studentData,
  });
});
app.listen(3000);
