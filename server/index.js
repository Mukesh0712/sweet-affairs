import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT ;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("Successfully Connected to MongoDB");
})

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
})