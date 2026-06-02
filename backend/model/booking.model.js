import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true
  },

  agency: {
    type: String,
    required: true
  },

  pickUpDate: {
    type: Date,
    required: true
  },

  dropOffDate: {
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending"
  },

  paymentMethod: {
    type: String,
    enum: ["pay at pickup", "pay online"],
    default: "pay at pickup"
  },

  isPaid: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;