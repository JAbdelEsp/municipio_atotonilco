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
  getBanner,
  getTextBanner,
  NewTextBanner,
} from "../../slices/bannerSlice";
import { closeModal } from "../../slices/modalSlice";
import TextBannerInfoPopup from "./TextBannerInfoPopup";
import BannerInfoPopup from "./BannerInfoPopup";
interface AddTextBannerPopupProps {
  // taskId: string;
}

const AddBannerPopup = ({}: AddTextBannerPopupProps) => {
  const dispatch = useAppDispatch();
  const date = new Date();
  const [file, setFile] = useState<any>(null);

  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("picture", file.name);
    formData.append("date", date.toLocaleString("en-US"));
    formData.append("user", localStorage.getItem("user") || "");
    await dispatch(createBanner(formData));
    await dispatch(getBanner());
    dispatch(closeModal());
  };

  return (
    <>
      <BannerInfoPopup
        title="Agregar Nuevo Registro"
        setFile={setFile}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddBannerPopup;
