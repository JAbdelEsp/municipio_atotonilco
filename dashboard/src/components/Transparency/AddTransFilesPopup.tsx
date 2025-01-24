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
import { getTrans, NewTransFinal, updateTrans } from "../../slices/transSlice";
import { closeModal } from "../../slices/modalSlice";
interface AddTransPopupProps {
  column: string;
  transId: string;
  year: string;
  article: string;
}

const AddTransFilesPopup = ({
  column,
  transId,
  year,
  article,
}: AddTransPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", transId);
    formData.append("column", column);
    await dispatch(updateTrans(formData as unknown as NewTransFinal));
    await dispatch(getTrans());
    dispatch(closeModal());
  };

  return (
    <>
      <TransPopup
        title="Agregar Archivo"
        column={column}
        article={article}
        transId={transId}
        year={year}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddTransFilesPopup;
