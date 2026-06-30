import stripe from "../config/stripe.js";
import Booking from "../model/booking.model.js";

export const createCheckoutSession = async (req, res) => {
  try {

    const { booking } = req.body;

    console.log("CLIENT_URL =", process.env.CLIENT_URL);
    console.log("BOOKING =", booking);

    const session = await stripe.checkout.sessions.create({

      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {

            currency: "usd",

            product_data: {

              name: booking.car.name,

              description: booking.car.location,

              // temporary image remove kar do
              // images: [booking.car.images.main],

            },

            unit_amount:
              booking.car.price.rentPerDay * 100,

          },

          quantity: 1,

        },
      ],

      mode: "payment",

      success_url:
        `${process.env.CLIENT_URL}/payment-success?bookingId=${booking._id}`,

      cancel_url:
        `${process.env.CLIENT_URL}/payment-cancel`,

    });

    res.status(200).json({
      url: session.url,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

export const markBookingPaid = async (req,res)=>{
  try{

    const { bookingId } = req.body;

    const booking =
    await Booking.findByIdAndUpdate(
      bookingId,
      {
        isPaid:true,
        status:"completed"
      },
      {
        new:true
      }
    );

    res.json(booking);

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};

