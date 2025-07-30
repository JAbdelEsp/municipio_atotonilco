import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import {
  createTrans,
  deleteTrans,
  getTrans,
  NewTrans,
} from "../../slices/transSlice";
import { closeModal } from "../../slices/modalSlice";
import DeleteWarnTextBannerPopup from "./DeleteWarnTextBannerPopup";
import {
  deleteBanner,
  deleteDirections,
  getBanner,
  getDirections,
  getTextBanner,
  getVideo,
} from "../../slices/bannerSlice";
import DeleteWarnDirectionsPopup from "./DeleteWarnDirectionsPopup";
interface DeleteDirectionsPopupProps {
  params: any;
}

const DeleteDirectionsPopup = ({ params }: DeleteDirectionsPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteVideoOnSubmit = async () => {
    await dispatch(deleteDirections(params));
    dispatch(closeModal());
    dispatch(getDirections());
  };

  return (
    <>
      <DeleteWarnDirectionsPopup
        title={`Eliminar Registro ${params.name}`}
        onSubmit={deleteVideoOnSubmit}
      />
    </>
  );
};

export default DeleteDirectionsPopup;
