import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TaskPopup from "./TaskPopup";
import { closeModal } from "../../slices/modalSlice";
interface AddTaskPopupProps {
  // taskId: string;
}

const AddTaskPopup = ({}: AddTaskPopupProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  const [task, setTask] = useState<NewTask>({
    id_news: "",
    title: "",
    author: "",
    content: "",
    date: "",
    views: "",
    time: "",
    image: "",
    neighborhood: "",
  });

  const submitNewTask = async () => {
    if (task.id_news) {
      await dispatch(createTask(task as NewTaskFinal));
      // await dispatch(getTasks());
      // dispatch(closeModal());
    }
  };

  return (
    <>
      <TaskPopup
        title="Agregar Nuevo Registro"
        task={task}
        setTask={setTask}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddTaskPopup;
