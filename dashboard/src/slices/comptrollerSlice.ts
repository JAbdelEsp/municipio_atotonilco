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

export type NewComptroller = {
  id: string;
  file: string;
};

export type Comptroller = NewComptroller & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewComptrollerPayload = {
  id: string;
  year: string;
  file_name: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string; // TODO: Temp
};

export type NewPublicPayload = {
  id: string;
  file: string;
  user: string;
  date: string; // TODO: Temp
};

export type NewBuzonPayload = {
  id: string;
  folio: string;
  type: string;
  date_time: string;
  place: string;
  name: string;
  lastname: string;
  address: string;
  email: string;
  public_server: string;
  charge: string;
  area: string;
  description: string;
  status: string; // TODO: Temp
};

export type UpdateComptrollerPayload = Omit<
  NewComptrollerPayload,
  "projectId" | "dashboardId"
>;

export type ComptrollerBasicInfo = NewComptrollerPayload & {
  id: string;
};

export type PublicBasicInfo = NewPublicPayload & {
  id: string;
};

export type BuzonBasicInfo = NewBuzonPayload & {
  id: string;
};

export type NewComptrollerFinal = NewComptroller & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type ComptrollerState = {
  comptroller: ComptrollerBasicInfo[];
  publicInfo: PublicBasicInfo[];
  buzon: BuzonBasicInfo[];
  selectedComptroller: ComptrollerBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: ComptrollerState = {
  comptroller: [],
  publicInfo: [],
  buzon: [],
  selectedComptroller: undefined,
  status: "idle",
  error: null,
};

export const getComptroller = createAsyncThunk(
  "contraloria/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/contraloria/records");
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
  "c/getOne",
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

export const createComptroller = createAsyncThunk(
  "comptroller/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      year: payload.get("year"),
      file_name: payload.get("file_name"),
      user: localStorage.getItem("user"),
      date: date.toLocaleString("en-US"),
      id_indicator: payload.get("id_comptroller"),
    };
    try {
      const response = await axiosInstance.post("/contraloria/register", data);
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

export const createPublicInfo = createAsyncThunk(
  "comptroller/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/contraloria/register/public",
        payload
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

export const getComptrollerPublicInfo = createAsyncThunk(
  "publicInfo/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/contraloria/records/public");
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

export const getBuzon = createAsyncThunk(
  "buzon/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/contraloria/buzon");
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

export const updateComptroller = createAsyncThunk(
  "contraloria/updateOne",
  async (comptroller: Comptroller, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/contraloria/update`,
        comptroller,
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

export const deleteComptroller = createAsyncThunk(
  "comptroller/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/contraloria/delete/?id=${params.id}&year=${params.year}`
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

export const deletePublic = createAsyncThunk(
  "comptroller/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/contraloria/public/delete/?id=${params.id}&description=${params.description}`
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

export const comptrollerSlice = createSlice({
  name: "comptroller",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComptroller.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getComptroller.fulfilled,
        (state, action: PayloadAction<ComptrollerBasicInfo[]>) => {
          state.status = "idle";
          state.comptroller = action.payload;
        }
      )
      .addCase(
        getComptrollerPublicInfo.fulfilled,
        (state, action: PayloadAction<PublicBasicInfo[]>) => {
          state.status = "idle";
          state.publicInfo = action.payload;
        }
      )
      .addCase(
        getBuzon.fulfilled,
        (state, action: PayloadAction<BuzonBasicInfo[]>) => {
          state.status = "idle";
          state.buzon = action.payload;
        }
      );
  },
});

export default comptrollerSlice.reducer;
