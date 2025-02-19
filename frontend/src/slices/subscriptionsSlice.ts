import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

export type NewSubscription = {
  email: string;
};

type SubscriptionsState = {
  subscriptions: NewSubscription[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: SubscriptionsState = {
  subscriptions: [],
  status: "idle",
  error: null,
};

export const Create = createAsyncThunk(
  "subscriptions/create",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      email: payload.get("email"),
      date: payload.get("date"),
    };
    try {
      const response = await axiosInstance.post(
        "/subscriptions/register",
        data
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        const errorResponse = error.message;
        return rejectWithValue(errorResponse);
      }
      throw error;
    }
  }
);

export const Send = createAsyncThunk(
  "subscriptions/send",
  async (payload: any, { rejectWithValue }) => {
    const emailData = {
      email: payload.get("email"),
    };
    try {
      const response = await axiosInstance.post(
        "/subscriptions/email",
        emailData
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        const errorResponse = error.message;
        return rejectWithValue(errorResponse);
      }
      throw error;
    }
  }
);

export const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(Create.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Create.rejected, (state) => {
        state.status = "failed";
        state.error = "Hubo un error al realizar el registro!";
      });
  },
});

export default subscriptionsSlice.reducer;
