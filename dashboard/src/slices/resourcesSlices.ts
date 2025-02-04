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

export type NewResources = {
  id: string;
  file: string;
};

export type Resources = NewResources & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewResourcesPayload = {
  id: string;
  area: string;
  description: string;
  requeriment: string;
  date: string;
  user: string;
};

export type NewAreasPayload = {
  id: string;
  area: string;
  name: string;
  manager: string;
  description: string;
  image: string;
  date: string;
  user: string;
};

export type NewReqPayload = {
  id: string;
  description: string;
  date: string;
  user: string;
};

export type UpdateSevacPayload = Omit<
  NewResourcesPayload,
  "projectId" | "dashboardId"
>;

export type ResourcesBasicInfo = NewResourcesPayload & {
  id: string;
};

export type AreasBasicInfo = NewAreasPayload & {
  id: string;
};

export type ReqBasicInfo = NewReqPayload & {
  id: string;
};

export type NewResourcesFinal = NewResources & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type ResourcesState = {
  resources: ResourcesBasicInfo[];
  areas: AreasBasicInfo[];
  req: ReqBasicInfo[];
  selectedResources: ResourcesBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: ResourcesState = {
  resources: [],
  areas: [],
  req: [],
  selectedResources: undefined,
  status: "idle",
  error: null,
};

export const getResources = createAsyncThunk(
  "resources/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/resources/records");
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

export const getResourcesByid = createAsyncThunk(
  "resources/getOne",
  async (resourcesId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/resources/recordsBy?id=${resourcesId}`
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

export const getRequeriments = createAsyncThunk(
  "requeriments/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/resources/requeriments/records"
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

export const getAreas = createAsyncThunk(
  "areas/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/areas/records");
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

export const createResource = createAsyncThunk(
  "resource/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      area: payload.get("area"),
      description: payload.get("description"),
      requeriment: payload.get("requeriment"),
      date: date.toLocaleDateString("en-US"),
      user: localStorage.getItem("user"),
      online: payload.get("online") === "on" ? true : false,
    };
    console.log("data: ", data);
    try {
      const response = await axiosInstance.post("/resources/register", data);
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

export const updateResource = createAsyncThunk(
  "resource/updateOne",
  async (resources: Resources, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/resources/update`,
        resources,
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

export const deleteResource = createAsyncThunk(
  "resource/deleteOne",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/resources/delete/?id=${id}`
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

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResources.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getRequeriments.fulfilled,
        (state, action: PayloadAction<ReqBasicInfo[]>) => {
          state.status = "idle";
          state.req = action.payload;
        }
      )
      .addCase(
        getResources.fulfilled,
        (state, action: PayloadAction<ResourcesBasicInfo[]>) => {
          state.status = "idle";
          state.resources = action.payload;
        }
      )
      .addCase(
        getAreas.fulfilled,
        (state, action: PayloadAction<AreasBasicInfo[]>) => {
          state.status = "idle";
          state.areas = action.payload;
        }
      );
  },
});

export default resourcesSlice.reducer;
