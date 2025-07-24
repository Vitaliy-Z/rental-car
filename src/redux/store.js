import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import carDetailsReducer from "./carDetails/slice";
import brandsReducer from "./brands/slice";
import filtersReducer from "./filters/slice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    carDetails: carDetailsReducer,
    brands: brandsReducer,
    filters: filtersReducer
  }
});

export default store;
