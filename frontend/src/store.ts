import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./slices/notificationSlice";
import proceduresReducer from "./slices/proceduresSlice";
import modalReducer from "./slices/modalSlice";
import sendReducer from "./slices/sendSlice";
import subscriptionsReducer from "./slices/subscriptionsSlice";
import comptrollerReducer from "./slices/comptrollerSlice";
import bannersReducer from "./slices/bannerSlices";
import { axiosMiddleware } from "./api/middleware";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    modal: modalReducer,
    procedures: proceduresReducer,
    send: sendReducer,
    subscriptions: subscriptionsReducer,
    comptroller: comptrollerReducer,
    banners: bannersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
