import { Schema, model } from "mongoose";

const tableSchema = new Schema({
    tableNumber: String,
    booked: Boolean,
    bookedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

const Table = model('Table', tableSchema);

export default Table;