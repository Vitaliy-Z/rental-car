import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api.js";

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get("/brands");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
