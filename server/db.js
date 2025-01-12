import mongoose from "mongoose";

const connectDB = async()=>{
    const conn = await mongoose.connect("mongodb+srv://krrohan129:37sAGVNjCWf6Uy6X@cluster0.q4dvb.mongodb.net/crud-3?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected", conn.connection.host)
};

export default connectDB;