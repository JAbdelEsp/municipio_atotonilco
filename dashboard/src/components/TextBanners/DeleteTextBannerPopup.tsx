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
import { deleteTextBanner, getTextBanner } from "../../slices/bannerSlice";
interface DeleteTransPopupProps {
  params: any;
}

const DeleteTextBannerPopup = ({ params }: DeleteTransPopupProps) => {
  const dispatch = useAppDispatch();
  console.log(params);
  const deleteTextBannerOnSubmit = async () => {
    await dispatch(deleteTextBanner(params));
    dispatch(closeModal());
    dispatch(getTextBanner());
  };

  return (
    <>
      <DeleteWarnTextBannerPopup
        title={`Eliminar Registro ${params.text}`}
        onSubmit={deleteTextBannerOnSubmit}
      />
    </>
  );
};

export default DeleteTextBannerPopup;
