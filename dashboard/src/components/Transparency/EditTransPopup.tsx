import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransPopup from "./TransPopup";
import { NewTransFinal, updateTrans } from "../../slices/transSlice";
import EditTransInfoPopup from "./EditTransInfoPopup";
interface AddTransPopupProps {
  params: any;
}
const EditTransPopup = ({ params }: AddTransPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submiting task");
    const formData = new FormData(e.currentTarget);
    formData.append("id", params.id);
    dispatch(updateTrans(formData as unknown as NewTransFinal));
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
