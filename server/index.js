import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import User from "./models/User.js";
import FoodItem from "./models/FoodItem.js";
import Table from "./models/Table.js";
import Order from "./models/Order.js";

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

    if (!name) emptyFields.push('Name');
    if (!phone) emptyFields.push('Phone');
    if (!email) emptyFields.push('Email');
    if (!password) emptyFields.push('Password');
    if (!role) emptyFields.push('Role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(' , ')} are Required`
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
            message: `Email and Password is Required !`
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
    else {
        return res.json({
            success: false,
            message: `Invalid Email and Password`
        })
    }
})

//FoodItem API
app.post('/foodItem', async (req, res) => {
    const {title, description, imgURL, price, category } = req.body;

    //validation to check all fields are filled
    const emptyFields = []

    if (!title) emptyFields.push('Title')
    if (!description) emptyFields.push('Description')
    if (!imgURL) emptyFields.push('ImgURL')
    if (!price) emptyFields.push('Price')
    if (!category) emptyFields.push('Category')

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(' , ')} are Required`
        })
    }

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
app.get('/foodItemByCategory', async (req, res) => {
    const { category } = req.query;

    if (!category) {
        res.json({
            success: false,
            message: `Category is Required`,
        })
    }

    const foodItems = await FoodItem.find({
        category: { $regex: category, $options: 'i' }
    })

    res.json({
        success: true,
        message: `Food Items Fetched Successfully`,
        data: foodItems
    })
})

//Search FoodItem by Title
app.get('/foodItemByTitle', async (req, res) => {
    const { title } = req.query;

    if (!title) {
        res.json({
            success: false,
            message: `Title is Required`,
        })
    }

    const foodItems = await FoodItem.find({
        title: { $regex: title, $options: 'i' }
    })

    res.json({
        success: true,
        message: `Food Items Fetched Successfully`,
        data: foodItems
    })
})

//All Food Items API
app.get('/allFoodItems', async (req, res) => {
    const foodItems = await FoodItem.find()

    if (!foodItems) {
        res.json({
            success: false,
            message: `Food Items Not Found !`,
        })
    }
    else {
        res.json({
            success: true,
            message: `Food Items Fetched Successfully`,
            data: foodItems
        })
    }
})

//Create Table API
app.post('/createTable', async (req, res) => {
    const { tableNumber } = req.body;

    if (!tableNumber) {
        res.json({
            success: false,
            message: `Please Enter Table Number!`,
        })
    }

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable) {
        return res.json({
            success: false,
            message: `Table ${tableNumber} Already Exists`
        })
    }

    const table = new Table({
        tableNumber: tableNumber,
        booked: false
    })

    const savedTable = await table.save();

    res.json({
        success: true,
        message: `Table ${tableNumber} Created Successfully`,
        data: savedTable
    })
})

//Book Table API
app.post('/bookTable', async (req, res) => {
    const {tableNumber, userID } = req.body;

    if (!tableNumber || !userID) {
        return res.json({
            success: false,
            message: `Table Number and UserID is Required`
        })
    }

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable && existingTable.booked) {
        return res.json({
            success: false,
            message: `Table ${tableNumber} Already Booked`
        })
    }

    if (existingTable) {
        existingTable.booked = true;
        existingTable.bookedBy = userID;
        await existingTable.save();

        res.json({
            success: true,
            message: `Table ${tableNumber} Booked Successfully`,
            data: existingTable
        })
    }
})

//UnBook Table API
app.post('/unBookTable', async (req, res) => {
    const { tableNumber } = req.body;

    if (!tableNumber) {
        res.json({
            success: false,
            message: `Please Enter Table Number!`,
        })
    }

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable) {
        existingTable.booked = false;
        existingTable.bookedBy = null;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: `UnBook Table ${tableNumber}`,
        data: existingTable
    })
})

//Get Available Table API
app.get('/availableTables', async (req, res) => {
    const availableTables = await Table.find();
    
    res.json({
        success: true,
        message: `Available Tables fetched Successfully`,
        data: availableTables
    })
})

//Order FoodItems API
app.post('/orderFoodItems', async (req, res) => {
    const {userID, tableNumber, items } = req.body;

    const emptyFields = []
    
    if (!userID) emptyFields.push('UserID')
    if (!tableNumber) emptyFields.push('TableNumber')
    if (!items) emptyFields.push('Items')

    if (emptyFields.length > 0) {
        res.json({
            success: false,
            message: `${emptyFields.join(' , ')} is Required`,
        })
    }

    const totalOrders = await Order.countDocuments();

    const orderID = totalOrders + 1;

    const order = new Order({
        orderID: orderID,
        userID: userID,
        tableNumber: tableNumber,
        items: items
    })

    const savedOrder = await order.save();

    res.json({
        success: true,
        message: `Order Placed Successfully`,
        data: savedOrder
    })
})

//Order API
app.get('/order', async (req, res) => {
    const { orderID } = req.query;

    if (!orderID) {
        res.json({
            success: false,
            message: `OrderID is Required`,
        })
    }

    const order = await Order.findOne({ orderID: orderID });

    res.json({
        success: true,
        message: `Order Fetched Successfully`,
        data: order
    })
})

//Order By userID
app.get('/ordersByUserID', async (req, res) => {
    const { userID } = req.query;

    if (!userID) {
        res.json({
            success: false,
            message: `UserID is Required`,
        })
    }

    const orders = await Order.find({ userID: userID });

    res.json({
        success: true,
        message: `Orders Fetched Successfully`,
        data: orders
    })
})

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})