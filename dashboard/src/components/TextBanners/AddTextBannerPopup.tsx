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
  createTextBanner,
  getTextBanner,
  NewTextBanner,
} from "../../slices/bannerSlice";
import { closeModal } from "../../slices/modalSlice";
import TextBannerInfoPopup from "./TextBannerInfoPopup";
interface AddTextBannerPopupProps {
  // taskId: string;
}

const AddTextBannerPopup = ({}: AddTextBannerPopupProps) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<NewTextBanner>({
    id: "",
  });

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await dispatch(createTextBanner(formData));
    await dispatch(getTextBanner());
    dispatch(closeModal());
  };

  return (
    <>
      <TextBannerInfoPopup
        title="Agregar Nuevo Registro"
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddTextBannerPopup;
