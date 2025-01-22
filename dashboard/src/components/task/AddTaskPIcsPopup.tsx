import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import PicsPopup from "./PicsPopup";
interface AddTaskPicsPopupProps {
  taskId: string;
}

const AddTaskPicsPopup = ({ taskId }: AddTaskPicsPopupProps) => {
  const dispatch = useAppDispatch();
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

  const submitNewTask = () => {};
  return (
    <>
      <PicsPopup
        title="Agregar Imagenes"
        taskId={taskId}
        setTask={setTask}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddTaskPicsPopup;
