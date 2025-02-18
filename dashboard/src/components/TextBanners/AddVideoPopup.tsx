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
  createTextBanner,
  createVideo,
  getBanner,
  getTextBanner,
  getVideo,
  NewTextBanner,
} from "../../slices/bannerSlice";
import { closeModal } from "../../slices/modalSlice";
import VideoInfoPopup from "./VideoInfoPopup";
interface AddVideoPopupProps {
  // taskId: string;
}

const AddVideoPopup = ({}: AddVideoPopupProps) => {
  const dispatch = useAppDispatch();
  const date = new Date();
  const [file, setFile] = useState<any>(null);

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("video", file.name);
    formData.append("date", date.toLocaleString("en-US"));
    formData.append("user", localStorage.getItem("user") || "");
    await dispatch(createVideo(formData));
    await dispatch(getVideo());
    dispatch(closeModal());
  };

  return (
    <>
      <VideoInfoPopup
        title="Agregar Video"
        setFile={setFile}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddVideoPopup;
