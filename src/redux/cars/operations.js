import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (queryParams = {}, thunkAPI) => {
    try {
      const response = await apiClient.get("/cars", { params: queryParams });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const fetchMoreCars = createAsyncThunk(
  "cars/fetchMoreCars",
  async (queryParams = {}, thunkAPI) => {
    try {
      const response = await apiClient.get("/cars", { params: queryParams });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
