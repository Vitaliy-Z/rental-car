import { createSlice } from "@reduxjs/toolkit";
import { handlePending } from "../../utils/reduxUtils";
import { handleError } from "../../utils/reduxUtils";
import { fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, handlePending);
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCars.rejected, handleError);
  }
});

export default carsSlice.reducer;
