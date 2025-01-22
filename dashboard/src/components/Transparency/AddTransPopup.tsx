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
import { createTrans, NewTrans } from "../../slices/transSlice";
interface AddTransPopupProps {
  // taskId: string;
}

const AddTransPopup = ({}: AddTransPopupProps) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<NewTrans>({
    id: "",
    file: "",
  });

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await dispatch(createTrans(formData));
  };

  return (
    <>
      <TransInfoPopup title="Agregar Nuevo Registro" onSubmit={submitNewTask} />
    </>
  );
};

export default AddTransPopup;
