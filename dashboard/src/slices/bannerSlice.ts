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

export type NewTextBanner = {
  id: string;
};

export type NewVideoBanner = {
  id: string;
};

export type NewBanner = {
  id: string;
};

export type NewVideo = {
  id: string;
};

export type TextBanner = NewTextBanner & {
  id: string;
};

export type VideoBanner = NewVideoBanner & {
  id: string;
};

export type Banner = NewBanner & {
  id: string;
};

export type Video = NewVideo & {
  id: string;
};

// export type Newtrans = Omit<trans, "id">;

export type NewTextBannerPayload = {
  id: string;
  text: string;
  user: string;
  date: string; // TODO: Temp
};

export type NewBannerPayload = {
  id: string;
  picture: string;
  title: string;
  user: string;
  date: string; // TODO: Temp
};

export type NewVideoPayload = {
  id: string;
  video: string;
  title: string;
  user: string;
  date: string; // TODO: Temp
};

export type UpdateSevacPayload = Omit<
  NewTextBannerPayload,
  "projectId" | "dashboardId"
>;

export type TextBannerBasicInfo = NewTextBannerPayload & {
  id: string;
};

export type VideoBannerBasicInfo = NewVideoPayload & {
  id: string;
};

export type BannerBasicInfo = NewBannerPayload & {
  id: string;
};

export type NewTextBannerFinal = NewTextBanner & {
  id: string;
};

export type NewVideoBannerFinal = NewVideoBanner & {
  id: string;
};

export type NewBannerFinal = NewBanner & {
  id: string;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type TextBannerState = {
  banner: TextBannerBasicInfo[];
  imageBanner: BannerBasicInfo[];
  video: VideoBannerBasicInfo[];
  selectedBanner: TextBannerBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: TextBannerState = {
  banner: [],
  imageBanner: [],
  video: [],
  selectedBanner: undefined,
  status: "idle",
  error: null,
};

export const getTextBanner = createAsyncThunk(
  "banners/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/banners/records");
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

export const getBanner = createAsyncThunk(
  "banner/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/banner/records");
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

export const getVideo = createAsyncThunk(
  "video/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/video/records");
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

export const createTextBanner = createAsyncThunk(
  "banners/createOne",
  async (payload: any, { rejectWithValue }) => {
    const data = {
      text: payload.get("text"),
      user: localStorage.getItem("user"),
      date: date.toLocaleString("en-US"),
    };
    try {
      const response = await axiosInstance.post("/banners/register", data);
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

export const createBanner = createAsyncThunk(
  "banner/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/banner/register", payload);
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

export const createVideo = createAsyncThunk(
  "video/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/video/register", payload);
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

export const updateTextBanner = createAsyncThunk(
  "banners/updateOne",
  async (banner: any, { rejectWithValue }) => {
    const data = {
      id: banner.get("id"),
      text: banner.get("text"),
    };
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axiosInstance.put(
        `/banners/update`,
        data,
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

export const deleteTextBanner = createAsyncThunk(
  "banners/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/banners/delete/?id=${params.id}`
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

export const deleteBanner = createAsyncThunk(
  "banner/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/banner/delete/?id=${params.id}&title=${params.title}`
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

export const deleteVideo = createAsyncThunk(
  "video/deleteOne",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/video/delete/?id=${params.id}&title=${params.title}`
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

export const textBannerSlice = createSlice({
  name: "textBanner",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTextBanner.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getTextBanner.fulfilled,
        (state, action: PayloadAction<TextBannerBasicInfo[]>) => {
          state.status = "idle";
          state.banner = action.payload;
        }
      )
      .addCase(
        getBanner.fulfilled,
        (state, action: PayloadAction<BannerBasicInfo[]>) => {
          state.status = "idle";
          state.imageBanner = action.payload;
        }
      )
      .addCase(
        getVideo.fulfilled,
        (state, action: PayloadAction<VideoBannerBasicInfo[]>) => {
          state.status = "idle";
          state.video = action.payload;
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

export default textBannerSlice.reducer;
