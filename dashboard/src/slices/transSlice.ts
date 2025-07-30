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

export type NewTrans = {
  id: string;
  file: string;
};

export type Trans = NewTrans & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewTransPayload = {
  id: string;
  article: string;
  year: string;
  fraction: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string; // TODO: Temp
};

export type UpdateTransPayload = Omit<
  NewTransPayload,
  "projectId" | "dashboardId"
>;

export type TransBasicInfo = NewTransPayload & {
  id: string;
};

export type NewTransFinal = NewTrans & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type TransState = {
  trans: TransBasicInfo[];
  selectedtrans: TransBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: TransState = {
  trans: [],
  selectedtrans: undefined,
  status: "idle",
  error: null,
};

export const getTrans = createAsyncThunk(
  "trans/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/transparency/records");
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

export const getTransOne = createAsyncThunk(
  "trans/getOne",
  async (transId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/trans/${transId}`);
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

export const createTrans = createAsyncThunk(
  "trans/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      article: payload.get("article"),
      year: payload.get("year"),
      fraction: payload.get("fraction"),
      user: localStorage.getItem("user"),
      date: date.toLocaleString("en-US"),
    };
    try {
      const response = await axiosInstance.post("/transparency/register", data);
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

export const uploadPics = createAsyncThunk(
  "trans/pics",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/news/pictures", payload);
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

export const updateTrans = createAsyncThunk(
  "trans/updateOne",
  async (trans: Trans, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/transparency/update`,
        trans,
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

export const deleteTrans = createAsyncThunk(
  "trans/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/transparency/delete/?id=${params.id}&article=${params.article}&year=${params.year}&fraction=${params.fraction}`
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

export const transSlice = createSlice({
  name: "trans",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrans.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getTrans.fulfilled,
        (state, action: PayloadAction<TransBasicInfo[]>) => {
          state.status = "idle";
          state.trans = action.payload;
        }
      );
  },
});

export default transSlice.reducer;
