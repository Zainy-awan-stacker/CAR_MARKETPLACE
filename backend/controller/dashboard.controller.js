import Booking from "../model/booking.model.js";

export const getDashboardData = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("car")
      .populate("user")
      .sort({ createdAt: -1 });

    const totalBookings = bookings.length;

    const totalRevenue = bookings
      .filter((booking) => booking.isPaid)
      .reduce(
        (total, booking) =>
          total + booking.car.price.rentPerDay,
        0
      );

    res.json({
      bookings,
      totalBookings,
      totalRevenue,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};