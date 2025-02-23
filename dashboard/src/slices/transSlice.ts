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
      const response = await axiosInstance.get(
        BACKEND_BASE_URL + "/transparency/records"
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
      const response = await axiosInstance.post(
        BACKEND_BASE_URL + "/news/pictures",
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
        BACKEND_BASE_URL + `/transparency/update`,
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
        BACKEND_BASE_URL +
          `/transparency/delete/?id=${params.id}&article=${params.article}&year=${params.year}`
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

export default transSlice.reducer;
