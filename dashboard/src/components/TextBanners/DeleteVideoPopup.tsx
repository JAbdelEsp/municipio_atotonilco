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
  deleteVideo,
  getBanner,
  getTextBanner,
  getVideo,
} from "../../slices/bannerSlice";
import DeleteWarnBannerPopup from "./DeleteWarnBannerPopup";
import DeleteWarnVideoPopup from "./DeleteWarnVideoPopup";
interface DeleteVideoPopupProps {
  params: any;
}

const DeleteVideoPopup = ({ params }: DeleteVideoPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteVideoOnSubmit = async () => {
    await dispatch(deleteVideo(params));
    dispatch(closeModal());
    dispatch(getVideo());
  };

  return (
    <>
      <DeleteWarnVideoPopup
        title={`Eliminar Registro ${params.title}`}
        onSubmit={deleteVideoOnSubmit}
      />
    </>
  );
};

export default DeleteVideoPopup;
