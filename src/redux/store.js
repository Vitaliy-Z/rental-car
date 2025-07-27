import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./cars/slice.js";
import carDetailsReducer from "./carDetails/slice.js";
import brandsReducer from "./brands/slice.js";
import filtersReducer from "./filters/slice.js";
import favoritesReducer from "./favorites/slice.js";

const persistedFavoritesReducer = persistReducer(
  {
    key: "favoritesCars",
    storage,
    whitelist: ["items"],
    version: 1
  },
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistedFavoritesReducer,
    carDetails: carDetailsReducer,
    brands: brandsReducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
