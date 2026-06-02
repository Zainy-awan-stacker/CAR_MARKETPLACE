import stripe from "../config/stripe.js";

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
        `${process.env.CLIENT_URL}/payment-success`,

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