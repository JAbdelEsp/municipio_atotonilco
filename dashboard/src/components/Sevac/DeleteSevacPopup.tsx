import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransInfoPopup from "./SevacInfoPopup";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import { deleteSevac, getSevac } from "../../slices/sevacSlice";
interface DeleteSevacPopupProps {
  params: any;
}

const DeleteSevacPopup = ({ params }: DeleteSevacPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteSevacOnSubmit = async () => {
    await dispatch(deleteSevac(params));
    dispatch(closeModal());
    dispatch(getSevac());
  };

  return (
    <>
      <DeleteWarnPopup
        title="Eliminar Registro"
        onSubmit={deleteSevacOnSubmit}
      />
    </>
  );
};

export default DeleteSevacPopup;
