import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransPopup from "./ComptrollerPopup";
import {
  getComptroller,
  NewComptrollerFinal,
  updateComptroller,
} from "../../slices/comptrollerSlice";
import EditTransInfoPopup from "./EditComptrollerInfoPopup";
import { closeModal } from "../../slices/modalSlice";
interface AddComptrollerPopupProps {
  params: any;
}
const EditComptrollerPopup = ({ params }: AddComptrollerPopupProps) => {
  const dispatch = useAppDispatch();

  const submitNewComptroller = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", params.id);
    await dispatch(
      updateComptroller(formData as unknown as NewComptrollerFinal)
    );
    await dispatch(getComptroller());
    dispatch(closeModal());
  };

  return (
    <>
      <EditTransInfoPopup
        title="Editar"
        params={params}
        onSubmit={submitNewComptroller}
      />
    </>
  );
};

export default EditComptrollerPopup;
