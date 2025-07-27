import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: ""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state[payload.name] = payload.value;
    },

    clearFilters: (state) => {
      state.brand = initialState.brand;
      state.rentalPrice = initialState.rentalPrice;
      state.minMileage = initialState.minMileage;
      state.maxMileage = initialState.maxMileage;
    }
  }
});

export const { setFilter, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
