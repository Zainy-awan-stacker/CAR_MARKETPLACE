import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  currentPage: 1,
  totalPages: 1,
};

const carsSlice = createSlice({
  name: "cars",

  initialState,

  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload.cars;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },

    clearCars: (state) => {
      state.cars = [];
      state.currentPage = 1;
      state.totalPages = 1;
    },
  },
});

export const { setCars, clearCars } = carsSlice.actions;

export default carsSlice.reducer;