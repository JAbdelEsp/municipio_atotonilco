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

export type NewSevac = {
  id: string;
  file: string;
};

export type Sevac = NewSevac & {
  id: string;
  file: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewSevacPayload = {
  id: string;
  year: string;
  section: string;
  financial_states: string;
  file_name: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string; // TODO: Temp
};

export type UpdateSevacPayload = Omit<
  NewSevacPayload,
  "projectId" | "dashboardId"
>;

export type SevacBasicInfo = NewSevacPayload & {
  id: string;
};

export type NewSevacFinal = NewSevac & {
  id: string;
  file: any;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type SevacState = {
  sevac: SevacBasicInfo[];
  selectedSevac: SevacBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: SevacState = {
  sevac: [],
  selectedSevac: undefined,
  status: "idle",
  error: null,
};

export const getSevac = createAsyncThunk(
  "sevac/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/sevac/records");
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

export const createSevac = createAsyncThunk(
  "trans/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      year: payload.get("year"),
      section: payload.get("section"),
      financial_states: payload.get("financial_states"),
      user: localStorage.getItem("user"),
      date: date.toLocaleString("en-US"),
      id_sevac: payload.get("id_sevac"),
    };
    try {
      const response = await axiosInstance.post("/sevac/register", data);
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

export const updateSevac = createAsyncThunk(
  "sevac/updateOne",
  async (sevac: Sevac, { rejectWithValue }) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(`/sevac/update`, sevac, options);
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

export const deleteSevac = createAsyncThunk(
  "trans/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/sevac/delete/?id=${params.id}&section=${params.section}&year=${params.year}`
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

export const sevacSlice = createSlice({
  name: "sevac",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSevac.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getSevac.fulfilled,
        (state, action: PayloadAction<SevacBasicInfo[]>) => {
          state.status = "idle";
          state.sevac = action.payload;
        }
      );
    //   .addCase(getTrans.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.trans = [];
    //     state.error = action.error.message || "Failed to fetch trans.";
    //   });
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

export default sevacSlice.reducer;
