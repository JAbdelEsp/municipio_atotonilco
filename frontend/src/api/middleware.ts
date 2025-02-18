import { Middleware } from "@reduxjs/toolkit";
import {
  showNotification,
  NotificationType,
} from "../slices/notificationSlice";
import { closeModal, openModal } from "../slices/modalSlice";

export const axiosMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type.endsWith("/rejected")) {
      const errorMessage = action.payload || "Ocurrió un error!";
      dispatch(
        showNotification({
          type: NotificationType.Error,
          message: errorMessage,
        })
      );
    } else if (action.type.endsWith("/fulfilled")) {
      const successMessage = action.payload?.message || "Success!";
      dispatch(
        showNotification({
          type: NotificationType.Success,
          message: successMessage,
        })
      );
    }
    return next(action);
  };
