import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice.js";
import carDetailsReducer from "./carDetails/slice.js";
import brandsReducer from "./brands/slice.js";
import filtersReducer from "./filters/slice.js";
import favoritesReducer from "./favorites/slice.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    carDetails: carDetailsReducer,
    brands: brandsReducer,
    filters: filtersReducer
  }
});

export default store;
