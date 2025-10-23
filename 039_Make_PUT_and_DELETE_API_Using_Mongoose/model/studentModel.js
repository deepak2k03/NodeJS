import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;