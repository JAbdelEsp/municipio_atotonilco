import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransPopup from "./SevacPopup";
import { getTrans, NewTransFinal, updateTrans } from "../../slices/transSlice";
import EditTransInfoPopup from "./EditSevacInfoPopup";
import { closeModal } from "../../slices/modalSlice";
interface AddTransPopupProps {
  params: any;
}
const EditTransPopup = ({ params }: AddTransPopupProps) => {
  const dispatch = useAppDispatch();

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", params.id);
    await dispatch(updateTrans(formData as unknown as NewTransFinal));
    await dispatch(getTrans());
    dispatch(closeModal());
  };

  return (
    <>
      <EditTransInfoPopup
        title="Editar"
        params={params}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default EditTransPopup;
