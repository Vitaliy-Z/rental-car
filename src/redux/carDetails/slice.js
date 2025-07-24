import { createSlice } from "@reduxjs/toolkit";
import { handlePending } from "../../utils/reduxUtils";
import { handleError } from "../../utils/reduxUtils";
import { fetchCarDetails } from "./operations";

const carDetailsSlice = createSlice({
  name: "carDetails",
  initialState: {
    items: {},
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarDetails.pending, handlePending);
    builder.addCase(fetchCarDetails.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCarDetails.rejected, handleError);
  }
});

export default carDetailsSlice.reducer;
