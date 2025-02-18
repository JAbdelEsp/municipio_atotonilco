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
  getBanner,
  getTextBanner,
} from "../../slices/bannerSlice";
import DeleteWarnBannerPopup from "./DeleteWarnBannerPopup";
interface DeleteBannerPopupProps {
  params: any;
}

const DeleteBannerPopup = ({ params }: DeleteBannerPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteTextBannerOnSubmit = async () => {
    await dispatch(deleteBanner(params));
    dispatch(closeModal());
    dispatch(getBanner());
  };

  return (
    <>
      <DeleteWarnBannerPopup
        title={`Eliminar Registro ${params.title}`}
        onSubmit={deleteTextBannerOnSubmit}
      />
    </>
  );
};

export default DeleteBannerPopup;
