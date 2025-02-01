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

export type NewPlanning = {
  id: string;
  file: string;
};

export type Planning = NewPlanning & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewPlanningPayload = {
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

export type UpdatePlanningPayload = Omit<
  NewPlanningPayload,
  "projectId" | "dashboardId"
>;

export type PlanningBasicInfo = NewPlanningPayload & {
  id: string;
};

export type PublicBasicInfo = NewPublicPayload & {
  id: string;
};

export type NewPlanningFinal = NewPlanning & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type PlanningState = {
  planning: PlanningBasicInfo[];
  publicInfo: PublicBasicInfo[];
  selectedPlanning: PlanningBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: PlanningState = {
  planning: [],
  publicInfo: [],
  selectedPlanning: undefined,
  status: "idle",
  error: null,
};

export const getPlanning = createAsyncThunk(
  "planning/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/planning/records");
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

export const getPlaaningOne = createAsyncThunk(
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

export const createPlanning = createAsyncThunk(
  "planning/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      year: payload.get("year"),
      table: payload.get("table"),
      file_name: payload.get("file_name"),
      user: localStorage.getItem("user"),
      date: date.toLocaleString("en-US"),
      id_planning: payload.get("id_planning"),
    };
    try {
      const response = await axiosInstance.post("/planning/register", data);
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
  "planning/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/planning/register/public",
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

export const getPublicInfo = createAsyncThunk(
  "publicInfo/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/planning/records/public");
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

export const updatePlanning = createAsyncThunk(
  "sevac/updateOne",
  async (planning: Planning, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/planning/update`,
        planning,
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
        `/planning/delete/?id=${params.id}&article=${params.article}&year=${params.year}`
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
  "planning/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/public/delete/?id=${params.id}&description=${params.description}`
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

// export const fetchtrans = createAsyncThunk("trans/fetchtrans", async () => {
//   const response = await axios.get(`${backendBaseUrl}/trans`);
//   return response.data;
// });

// export const gettrans = createAsyncThunk(
//   "trans/gettrans",
//   async (transId: number) => {
//     const response = await axios.get(`${backendBaseUrl}/trans/${transId}`);
//     return response.data;
//   }
// );

// export const addtrans = createAsyncThunk(
//   "trans/addtrans",
//   async (trans: NewtransFinal) => {
//     const transPayload: NewtransPayload = {
//       projectId: trans.project.id as number,
//       name: trans.name,
//       description: trans.description,
//       priority: trans.priority,
//       status: trans.status,
//       assigneeId: trans.assignee.id as number,
//       dashboardId: 1,
//     };
//     const response = await axios.post(`${backendBaseUrl}/trans`, transPayload);
//     return response.data;
//   }
// );

// export const updatetrans = createAsyncThunk(
//   "trans/updatetrans",
//   async (trans: trans) => {
//     const updatetransPayload: UpdatetransPayload = {
//       name: trans.name,
//       description: trans.description,
//       priority: trans.priority,
//       status: trans.status,
//       assigneeId: trans.assignee.id as number,
//     };
//     const response = await axios.patch(
//       `${backendBaseUrl}/trans/${trans.id}`,
//       updatetransPayload
//     );
//     return response.data;
//   }
// );

// export const deletetrans = createAsyncThunk(
//   "trans/deletetrans",
//   async (transId: number) => {
//     await axios.delete(`${backendBaseUrl}/trans/${transId}`);
//     return transId;
//   }
// );

export const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanning.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getPlanning.fulfilled,
        (state, action: PayloadAction<PlanningBasicInfo[]>) => {
          state.status = "idle";
          state.planning = action.payload;
        }
      )
      .addCase(
        getPublicInfo.fulfilled,
        (state, action: PayloadAction<PublicBasicInfo[]>) => {
          state.status = "idle";
          state.publicInfo = action.payload;
        }
      );

    //   .addCase(getTrans.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    //   });

    //   .addCase(getTrans.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.selectedtrans = undefined;
    //     state.error = action.error.message || "Failed to fetch trans.";
    //   })
    //   .addCase(createTrans.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    //   })
    //   // .addCase(
    //   //   createtrans.fulfilled,
    //   //   (state, action: PayloadAction<transBasicInfo>) => {
    //   //     state.status = "idle";
    //   //     state.trans.push(action.payload);
    //   //   }
    //   // )
    //   .addCase(createTrans.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message || "Failed to add trans.";
    //   })

    //   .addCase(updateTrans.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    //   })
    //   // .addCase(
    //   //   updatetrans.fulfilled,
    //   //   (state, action: PayloadAction<transBasicInfo>) => {
    //   //     state.status = "idle";
    //   //     const updatedtrans = action.payload;
    //   //     const index = state.trans.findIndex(
    //   //       (trans) => trans.id === updatedtrans.id
    //   //     );
    //   //     if (index !== -1) {
    //   //       state.trans[index] = updatedtrans;
    //   //     }
    //   //   }
    //   // )
    //   .addCase(updateTrans.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message || "Failed to update trans.";
    //   })
    //   .addCase(deleteTrans.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    //   })
    //   .addCase(
    //     deleteTrans.fulfilled,
    //     (state, action: PayloadAction<string>) => {
    //       state.status = "idle";
    //       const entityId = action.payload;
    //       state.trans = state.trans.filter((trans) => trans.id !== entityId);
    //     }
    //   )
    //   .addCase(deleteTrans.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message || "Failed to delete trans.";
    //   });
  },
});

export default planningSlice.reducer;
