import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransInfoPopup from "./ComptrollerInfoPopup";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import {
  deleteComptroller,
  getComptroller,
} from "../../slices/comptrollerSlice";
interface DeleteComptrollerPopupProps {
  params: any;
}

const DeleteComptrollerPopup = ({ params }: DeleteComptrollerPopupProps) => {
  const dispatch = useAppDispatch();
  const deleteComptrollerOnSubmit = async () => {
    await dispatch(deleteComptroller(params));
    dispatch(closeModal());
    dispatch(getComptroller());
  };

  return (
    <>
      <DeleteWarnPopup
        title={`Eliminar Registro "${params.file_name}"`}
        onSubmit={deleteComptrollerOnSubmit}
      />
    </>
  );
};

export default DeleteComptrollerPopup;
