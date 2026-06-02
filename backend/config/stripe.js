import "dotenv/config";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
  throw new Error(
    "Missing STRIPE_SECRET_KEY in environment. Add it to backend/.env or load dotenv before stripe initialization.",
  );
}

const stripe = new Stripe(stripeKey);

export default stripe;
