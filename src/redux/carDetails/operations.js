import apiClient from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCarDetails = createAsyncThunk(
  "carDetails/fetchCarDetails",
  async (carId, thunkAPI) => {
    try {
      const response = await apiClient.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
