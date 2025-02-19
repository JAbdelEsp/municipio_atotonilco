import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

export type NewProcedure = {
  resource: string;
  register_number: string;
  user_email: string;
  files: string;
  sent_email: string;
};

type SendState = {
  send: NewProcedure[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: SendState = {
  send: [],
  status: "idle",
  error: null,
};

export const Send = createAsyncThunk(
  "procedures/send",
  async (payload: any, { rejectWithValue }) => {
    const emailData = {
      user_email: payload.get("user_email"),
      register_number: payload.get("register_number"),
      resource: payload.get("resource"),
    };
    try {
      const response = await axiosInstance.post("/procedures/email", emailData);
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

export const sendSlice = createSlice({
  name: "sendEmail",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(Send.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Send.rejected, (state) => {
        state.status = "failed";
        state.error = "Hubo un error... intentalo nuevamente!";
      });
  },
});

export default sendSlice.reducer;
