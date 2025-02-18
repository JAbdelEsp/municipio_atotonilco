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

export const getProcedures = createAsyncThunk(
  "procedures/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/procedures/records");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

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
      .addCase(getProcedures.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getProcedures.fulfilled,
        (state, action: PayloadAction<NewProcedure[]>) => {
          state.status = "idle";
          state.procedures = action.payload;
        }
      )
      .addCase(getProcedures.rejected, (state, action) => {
        state.status = "failed";
        state.procedures = [];
        state.error = action.error.message || "Failed to fetch tasks.";
      })
      .addCase(Send.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(Send.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Hubo un error al enviar el correo elctrónico!";
      })
      .addCase(Send.fulfilled, (state, action: PayloadAction<NewProcedure>) => {
        state.status = "idle";
        // state.tasks.push(action.payload);
      });
  },
});

export default proceduresSlice.reducer;
