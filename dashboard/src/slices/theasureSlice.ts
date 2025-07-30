import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";
import { BACKEND_BASE_URL } from "../constants";

const date = new Date();

export type Project = {
  id: string;
  name: string;
};

export type Assignee = {
  id: string;
  name: string;
};

export type NewTheasure = {
  id: string;
  file: string;
};

export type Theasure = NewTheasure & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewTheasurePayload = {
  id: string;
  year: string;
  table_name: string;
  first_trimester: string;
  second_trimester: string;
  third_trimester: string;
  fourth_trimester: string;
  user: string;
  date: string; // TODO: Temp
};

export type UpdatePlanningPayload = Omit<
  NewTheasurePayload,
  "projectId" | "dashboardId"
>;

export type TheasureInfo = NewTheasurePayload & {
  id: string;
};

export type NewTheasureFinal = NewTheasure & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type TheasureState = {
  theasure: TheasureInfo[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: TheasureState = {
  theasure: [],
  status: "idle",
  error: null,
};

export const getTheasure = createAsyncThunk(
  "theasure/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/theasure/records");
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

export const getPlaningOne = createAsyncThunk(
  "trans/getOne",
  async (planningId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/trans/${planningId}`);
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

export const createTheasure = createAsyncThunk(
  "theasure/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      year: payload.get("year"),
      table_name: payload.get("table_name"),
      description: payload.get("description"),
      user: localStorage.getItem("user"),
      upload_date: date.toLocaleString("en-US"),
    };
    try {
      const response = await axiosInstance.post("/theasure/register", data);
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

export const updateTheasure = createAsyncThunk(
  "theasure/updateOne",
  async (theasure: Theasure, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/theasure/update`,
        theasure,
        options
      );
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

export const deletePlanning = createAsyncThunk(
  "planning/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/planning/delete/?id=${params.id}&article=${params.article}&year=${params.year}&file_name=${params.file_name}`
      );
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


export const theasureSlice = createSlice({
  name: "theasure",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheasure.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getTheasure.fulfilled,
        (state, action: PayloadAction<TheasureInfo[]>) => {
          state.status = "idle";
          state.theasure = action.payload;
        }
      )
  },
});

export default theasureSlice.reducer;
