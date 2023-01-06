import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    role: String
},{timestamps: true})

const User = mongoose.model("User", userSchema);

export default User