import mongoose from "mongoose";


const studentSchema= new mongoose.Schema({

    "name":String,
    "email":String,
    "age":Number,
    "course":String

},{timestamps:true})

const studentModel= mongoose.model("studentData",studentSchema)

export default studentModel