import express from "express";

import {

  checkAvailability,
  createBooking,
  getBookings,

} from "../controller/booking.controller.js";

const router = express.Router();



// check availability
router.post("/check", checkAvailability);

// create booking
router.post("/book", createBooking);

// get all bookings
router.get("/my-bookings", getBookings);

// get dashboard stats
// router.get("/", getDashboardStats);



export default router;