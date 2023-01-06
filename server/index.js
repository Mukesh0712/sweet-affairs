import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import User from "./models/User.js";
import FoodItem from "./models/FoodItem.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Successfully Connected to MongoDB");
})

//Signup API
app.post('/signup', async (req, res) => {

    const { name, phone, email, password, role } = req.body;

    //validation to check all fields are filled
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }

    //validation to check if email already exists
    const existingUserEmail = await User.findOne({ email: email })

    if (existingUserEmail) {
        return res.json({
            success: false,
            message: `Email ID ${email} Already Registered`
        })
    }

    //validation to check if phone already exists
    const existingUserPhone = await User.findOne({ phone: phone })

    if (existingUserPhone) {
        return res.json({
            success: false,
            message: `Phone Number ${phone} Already Registered`
        })
    }

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

//Login API
app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    //validation to check if email or password fields are not filled
    if (!email || !password) {
        return res.json({
            success: false,
            message: `Email and Password are Required !`
        })
    }

    //validation to check if user is Registered
    const existingUser = await User.findOne({ email: email, password: password })

    if (existingUser) {
        return res.json({
            success: true,
            message: `Login Successful`,
            data: existingUser
        })
    }
    else
    {
        return res.json({
            success: false,
            message: `Invalid Credentials`
        })
    }
})

//FoodItem API
app.post('/foodItem', async (req, res)=>{
    const {title, description, imgURL, price, category} = req.body;

    const foodItem = new FoodItem({
        title: title,
        description: description,
        imgURL: imgURL,
        price: price,
        category: category
    })

    const savedFoodItem = await foodItem.save();

    res.json({
        success: true,
        message: `Food Item Created Successfully`,
        data: savedFoodItem
    })
})

//Search FoodItem by Category
app.get('/foodItemByCategory', async (req, res)=>{
    const {category} = req.query;

    const foodItems = await FoodItem.find({
        category: {$regex: category, $options: 'i'}
    })

    res.json({
        success: true,
        message: `Food Items Fetched Successfully`,
        data: foodItems
    })
})

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})