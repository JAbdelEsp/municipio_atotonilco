import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransInfoPopup from "./TransInfoPopup";
import {
  createTrans,
  deleteTrans,
  getTrans,
  NewTrans,
} from "../../slices/transSlice";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
interface DeleteTransPopupProps {
  transId: number;
}

const DeleteTransPopup = ({ transId }: DeleteTransPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteTransOnSubmit = async () => {
    await dispatch(deleteTrans(transId));
    dispatch(closeModal());
    dispatch(getTrans());
  };

  return (
    <>
      <DeleteWarnPopup
        title="Eliminar Registro"
        onSubmit={deleteTransOnSubmit}
      />
    </>
  );
};

export default DeleteTransPopup;
