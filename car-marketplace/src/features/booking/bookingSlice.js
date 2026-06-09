import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",

  initialState,

  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },

    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },

    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const {
  setBookings,
  addBooking,
  clearBookings,
} = bookingSlice.actions;

export default bookingSlice.reducer;