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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agency",
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
  },
  amount: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;