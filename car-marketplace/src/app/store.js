import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import carsReducer from "../features/car/carsSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carsReducer,
    booking: bookingReducer,
  },
});
