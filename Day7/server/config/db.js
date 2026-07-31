import mongoose from "mongoose"

const connectDB=async()=>{
    try {

        const db=await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Database connected Successfully ${mongoose.connection.host}`);
        
        

    } catch (error) {

        console.log("Database connection failed",error.message);
        
        
    }
}

export default connectDB