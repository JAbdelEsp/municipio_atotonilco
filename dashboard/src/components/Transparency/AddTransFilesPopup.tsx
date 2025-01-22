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
interface AddTransPopupProps {
  transId: string;
  year: string;
  article: string;
}

const AddTransFilesPopup = ({ transId, year, article }: AddTransPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submiting task");
    const formData = new FormData(e.currentTarget);
    formData.append("id", transId);
    dispatch(updateTrans(formData as unknown as NewTransFinal));
  };

  return (
    <>
      <TransPopup
        title="Agregar Archivo"
        transId={transId}
        year={year}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddTransFilesPopup;
