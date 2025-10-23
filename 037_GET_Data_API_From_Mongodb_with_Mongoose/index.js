import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
    console.log("Connected to MongoDB");
})

app.get("/", async (req, res) => {
    const studentData=await studentModel.find();
    res.send(studentData);
});

app.listen(3000);