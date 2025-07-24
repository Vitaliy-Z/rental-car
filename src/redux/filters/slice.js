import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carBrand: "",
  carPrice: "",
  carMileage: {
    from: "",
    to: ""
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCarBrandFilter: (state, { payload }) => {
      state.carBrand = payload;
    },
    setCarPriceFilter: (state, { payload }) => {
      state.carPrice = payload;
    },
    setCarMileageFilter: (state, { payload }) => {
      state.carMileage[payload.name] = payload.value;
    },
    clearFilters: (state) => {
      state.carBrand = initialState.carBrand;
      state.carPrice = initialState.carPrice;
      state.carMileage = initialState.carMileage;
    }
  }
});

export const {
  setCarBrandFilter,
  setCarPriceFilter,
  setCarMileageFilter,
  clearFilters
} = filtersSlice.actions;

export default filtersSlice.reducer;
