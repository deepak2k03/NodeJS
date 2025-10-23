import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
  console.log("Connected to MongoDB");
});

app.put("/update/:id", async (req, resp) => {
    const id = req.params.id;
    console.log(req.body, id);
    
    const studentData = await studentModel.findByIdAndUpdate(id, {
        ...req.body
    })
    
    resp.send({
        message: 'data updated',
        success: true,
        info: studentData
    })
})

app.delete("/delete/:id", async (req, resp) => {
    const id = req.params.id;
    
    const studentData = await studentModel.findByIdAndDelete(id)
    
    resp.send({
        message: 'data updated', 
        success: true,
        info: studentData
    })
})


app.listen(3000);
