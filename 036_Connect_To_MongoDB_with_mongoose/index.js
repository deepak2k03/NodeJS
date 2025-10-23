import mongoose from "mongoose";
async function dbConnect() {
    await mongoose.connect("mongodb://localhost:27017/school");
    const schema=mongoose.Schema({
        name:String,
        email:String,
        age:Number, 
    });
    const Student=mongoose.model("Student",schema);
    const result=await Student.find();
    console.log(result);
}

dbConnect();