import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import tasksReducer from "./slices/taskSlice";
import transReducer from "./slices/transSlice";
import dashboardReducer from "./slices/dashboardSlice";
import projectSlice from "./slices/projectSlice";
import modalReducer from "./slices/modalSlice";
import { axiosMiddleware } from "./api/middleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    notification: notificationReducer,
    tasks: tasksReducer,
    trans: transReducer,
    dashboards: dashboardReducer,
    projects: projectSlice,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
