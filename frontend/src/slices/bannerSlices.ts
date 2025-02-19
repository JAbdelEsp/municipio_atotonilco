import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

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

export type NewBanner = {
  id: string;
};

export type NewVideo = {
  id: string;
};

export type TextBanner = NewTextBanner & {
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

export type NewPayload = {
  id: string;
  file: string;
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

export type UpdateComptrollerPayload = Omit<
  NewTextBannerPayload,
  "projectId" | "dashboardId"
>;

export type TextBannerBasicInfo = NewTextBannerPayload & {
  id: string;
};

export type BannerBasicInfo = NewBannerPayload & {
  id: string;
};

export type VideoBasicInfo = NewVideoPayload & {
  id: string;
};

export type PublicBasicInfo = NewPayload & {
  id: string;
};

export type PublicVideoInfo = NewVideoPayload & {
  id: string;
};

export type NewTextBannerFinal = NewTextBanner & {
  id: string;
};

// export interface trans {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type BannersState = {
  textBanner: TextBannerBasicInfo[];
  banner: BannerBasicInfo[];
  video: VideoBasicInfo[];
  selectedComptroller: TextBannerBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: BannersState = {
  textBanner: [],
  banner: [],
  video: [],
  selectedComptroller: undefined,
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

export const bannerSlice = createSlice({
  name: "banner",
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
          state.textBanner = action.payload;
        }
      )
      .addCase(
        getBanner.fulfilled,
        (state, action: PayloadAction<BannerBasicInfo[]>) => {
          state.status = "idle";
          state.banner = action.payload;
        }
      )
      .addCase(
        getVideo.fulfilled,
        (state, action: PayloadAction<VideoBasicInfo[]>) => {
          state.status = "idle";
          state.video = action.payload;
        }
      );
  },
});

export default bannerSlice.reducer;
