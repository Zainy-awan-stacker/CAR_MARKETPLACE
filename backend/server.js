import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import carRoutes from "./routes/car.route.js";
import bookingRoutes from "./routes/booking.route.js";
import agencyRoutes from "./routes/agency.route.js";
import paymentRoutes from "./routes/payment.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";
dotenv.config();
console.log("SERVER JWT:", process.env.JWT_SECRET);
connectDb();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/api/user", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/agency", agencyRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/dashboard", dashboardRoutes);

// api to create checkout session

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
