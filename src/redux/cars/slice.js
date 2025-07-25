import { createSlice } from "@reduxjs/toolkit";
import {
  handlePending,
  handleError,
  handlePendingMore,
  handleErrorMore
} from "../../utils/reduxUtils";
import { fetchCars, fetchMoreCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    isLoadingMore: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, handleError)

      .addCase(fetchMoreCars.pending, handlePendingMore)
      .addCase(fetchMoreCars.fulfilled, (state, { payload }) => {
        state.items.cars = [...state.items.cars, ...payload.cars];
        state.items.totalCars = payload.totalCars;
        state.items.page = payload.page;
        state.items.totalPages = payload.totalPages;
        state.isLoadingMore = false;
      })
      .addCase(fetchMoreCars.rejected, handleErrorMore);
  }
});

export default carsSlice.reducer;
