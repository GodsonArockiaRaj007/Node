import mongoose from "mongoose";

const curdSchema = new mongoose.Schema({
    "username":String,
    "useremail":String,
    "userage":Number
},{timestamps:true})

const curdModel= mongoose.model("curdData",curdSchema)

export default curdModel