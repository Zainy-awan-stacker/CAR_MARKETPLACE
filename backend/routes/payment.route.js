import express from "express";

import {
   createCheckoutSession,
   markBookingPaid
} from "../controller/payment.controller.js";

const router = express.Router();


// CREATE STRIPE CHECKOUT
router.post(
   "/create-checkout-session",
   createCheckoutSession
);

// MARK BOOKING AS PAID
router.post(
   "/mark-paid",
   markBookingPaid
);

export default router;