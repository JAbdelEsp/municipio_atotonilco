import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

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
  selectedComptroller: ComptrollerBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: ComptrollerState = {
  comptroller: [],
  publicInfo: [],
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

export const createBuzon = createAsyncThunk(
  "comptroller/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      type: payload.get("formulario"),
      date_time: payload.get("date_time"),
      place: payload.get("place"),
      name: payload.get("name"),
      lastname: payload.get("lastname"),
      address: payload.get("address"),
      email: payload.get("email"),
      phone: payload.get("phone"),
      public_server: payload.get("public_server"),
      charge: payload.get("charge"),
      area: payload.get("area"),
      description: payload.get("description"),
      folio: payload.get("folio"),
      status: "En Espera",
    };
    try {
      const response = await axiosInstance.post(
        "/contraloria/quejas/register",
        data
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

export const getPublicInfo = createAsyncThunk(
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
        getPublicInfo.fulfilled,
        (state, action: PayloadAction<PublicBasicInfo[]>) => {
          state.status = "idle";
          state.publicInfo = action.payload;
        }
      );
  },
});

export default comptrollerSlice.reducer;
