import Booking from "../model/booking.model.js";

// CHECK CAR AVAILABILITY
export const checkAvailability = async (req, res) => {
  try {
    const { carId, pickUpDate, dropOffDate } = req.body;

    // same dates par booking check
    const existingBooking = await Booking.findOne({
      car: carId,

      pickUpDate: {
        $lte: dropOffDate,
      },

      dropOffDate: {
        $gte: pickUpDate,
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
    res.status(500).json(error);
  }
};

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.json(booking);
  } catch (error) {
    res.status(500).json(error);
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
    res.status(500).json(error);
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
