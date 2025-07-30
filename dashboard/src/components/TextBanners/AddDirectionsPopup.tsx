import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import {
  createBanner,
  createDirection,
  createTextBanner,
  createVideo,
  getBanner,
  getDirections,
  getTextBanner,
  getVideo,
  NewTextBanner,
} from "../../slices/bannerSlice";
import { closeModal } from "../../slices/modalSlice";
import DirectionsInfoPopup from "./DirectionsInfoPopup";
interface AddDirectionsPopupProps {
  // taskId: string;
}

const AddDirectionsPopup = ({}: AddDirectionsPopupProps) => {
  const dispatch = useAppDispatch();
  const date = new Date();
  const [file, setFile] = useState<any>(null);
  const [text, setText] = useState("");

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("picture", file.name);
    formData.append("description", text);
    await dispatch(createDirection(formData));
    await dispatch(getDirections());
    dispatch(closeModal());
  };

  return (
    <>
      <DirectionsInfoPopup
        title="Agregar Director de Área"
        setFile={setFile}
        setText={setText}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddDirectionsPopup;
