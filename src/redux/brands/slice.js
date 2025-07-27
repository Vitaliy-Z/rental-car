import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";
import { handlePending, handleError } from "../../utils/reduxUtils.js";

const initialState = {
  brands: [],
  isLoading: false,
  error: null
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBrands.rejected, handleError);
  }
});

export default brandsSlice.reducer;
