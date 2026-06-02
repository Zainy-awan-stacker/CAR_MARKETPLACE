import express from "express";

import {
   createCheckoutSession
} from "../controller/payment.controller.js";

const router = express.Router();


// CREATE STRIPE CHECKOUT
router.post(
   "/create-checkout-session",
   createCheckoutSession
);

export default router;