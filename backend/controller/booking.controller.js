import mongoose from "mongoose";
import Booking from "../model/booking.model.js";
import Car from "../model/car.model.js";
import Agency from "../model/agency.model.js";

// CHECK CAR AVAILABILITY
export const checkAvailability = async (req, res) => {
  try {
    const { carId, pickUpDate, dropOffDate } = req.body;

    if (!carId || !pickUpDate || !dropOffDate) {
      return res.status(400).json({
        available: false,
        message: "Missing required fields",
      });
    }

    const pickUp = new Date(pickUpDate);
    const dropOff = new Date(dropOffDate);

    const existingBooking = await Booking.findOne({
      car: carId,
      pickUpDate: {
        $lte: dropOff,
      },
      dropOffDate: {
        $gte: pickUp,
      },
    });

    if (existingBooking) {
      return res.json({
        available: false,
        message: "Car Not Available",
      });
    }

    res.json({
      available: true,
      message: "Car Available",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const { pickUpDate, dropOffDate, user, car, agency } = req.body;

    if (!pickUpDate || !dropOffDate || !user || !car) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const carData = await Car.findById(car);

    if (!carData) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    const start = new Date(pickUpDate);
    const end = new Date(dropOffDate);

    const days =
      Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;

    const amount =
      days * carData.price.rentPerDay;

    const booking = await Booking.create({
      ...req.body,
      amount,
      pickUpDate: start,
      dropOffDate: end,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL BOOKINGS
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("car")
      .populate("user");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DASHBOARD DATA
// export const getDashboardStats =
// async (req,res)=>{

//   try{

//     const bookings =
//     await Booking.find()
//     .populate("car");

//     const totalBookings =
//     bookings.length;

//     const totalRevenue =
//     bookings
//       .filter(
//         booking => booking.isPaid
//       )
//       .reduce(
//         (total,booking)=>

//           total +
//           booking.car.price.rentPerDay,

//         0
//       );

//     res.json({
//       totalBookings,
//       totalRevenue,
//       bookings
//     });

//   }catch(error){

//     res.status(500).json({
//       message:error.message
//     });

//   }

// }