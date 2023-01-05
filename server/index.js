import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import User from "./models/User.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("Successfully Connected to MongoDB");
})

//Signup API
app.post('/signup', async (req, res)=>{

    const{name, phone, email, password, role} = req.body;

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: `${name} you have Registered Successfully`,
        data: savedUser
    })
    
})

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
})