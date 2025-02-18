import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

export type NewProcedure = {
  resource: string;
  register_number: string;
  user_email: string;
  files: string;
  sent_email: string;
};

type ProceduresState = {
  procedures: NewProcedure[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: ProceduresState = {
  procedures: [],
  status: "idle",
  error: null,
};

export const Create = createAsyncThunk(
  "procedures/create",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/procedures/register",
        payload
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

export const proceduresSlice = createSlice({
  name: "procedures",
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
      .addCase(Create.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Hubo un error al realizar el registro!";
      })
      .addCase(
        Create.fulfilled,
        (state, action: PayloadAction<NewProcedure>) => {
          state.status = "idle";
          // state.tasks.push(action.payload);
        }
      );
  },
});

export default proceduresSlice.reducer;
