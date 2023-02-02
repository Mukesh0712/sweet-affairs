import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderID: String,
    tableNumber: String,
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            name: String,
            price: Number,
            quantity: Number,
            imgURL: String,
        }]
})

const Order = model("Order", orderSchema);

export default Order;