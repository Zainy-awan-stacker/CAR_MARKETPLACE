import Booking from "../model/booking.model.js";

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

    // same dates par booking check
    const existingBooking = await Booking.findOne({
      car: carId,

      pickUpDate: {
        $lte: dropOff,
      },

      dropOffDate: {
        $gte: pickUp,
      },
    });

    // agar booking mil gayi
    if (existingBooking) {
      return res.json({
        available: false,
        message: "Car Not Available",
      });
    }

    // agar booking nahi mili
    res.json({
      available: true,
      message: "Car Available",
    });
  } catch (error) {
    console.log("Availability check error:", error);
    res.status(500).json({
      message: error.message || "Error checking availability",
    });
  }
};

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const { pickUpDate, dropOffDate, user, car } = req.body;

    // Validate required fields
    if (!pickUpDate || !dropOffDate || !user || !car) {
      return res.status(400).json({
        message: "Missing required fields: pickUpDate, dropOffDate, user, car",
      });
    }

    // Convert string dates to Date objects
    const pickUp = new Date(pickUpDate);
    const dropOff = new Date(dropOffDate);

    // Validate dates
    if (isNaN(pickUp) || isNaN(dropOff)) {
      return res.status(400).json({
        message: "Invalid date format",
      });
    }

    if (pickUp >= dropOff) {
      return res.status(400).json({
        message: "Drop-off date must be after pick-up date",
      });
    }

    const booking = await Booking.create({
      ...req.body,
      pickUpDate: pickUp,
      dropOffDate: dropOff,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.log("Booking error:", error);
    res.status(500).json({
      message: error.message || "Error creating booking",
    });
  }
};

// GET ALL BOOKINGS
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car").populate("user");

    res.json(bookings);
  } catch (error) {
    console.log("Get bookings error:", error);
    res.status(500).json({
      message: error.message || "Error fetching bookings",
    });
  }
};

// export const getBookings = async(req,res)=>{

// try{

// const bookings = await Booking.find();

// res.json(bookings);

// }catch(err){

// res.status(500).json(err);

// }

// }
