import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { createTrans, getTrans, NewTrans } from "../../slices/transSlice";
import { closeModal } from "../../slices/modalSlice";
import SevacInfoPopup from "./SevacInfoPopup";
import { createSevac, getSevac } from "../../slices/sevacSlice";
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
    const name = formData.get("file_name");
    formData.append("id_sevac", name + "sevac");
    await dispatch(createSevac(formData));
    await dispatch(getSevac());
    dispatch(closeModal());
  };

  return (
    <>
      <SevacInfoPopup title="Agregar Nuevo Registro" onSubmit={submitNewTask} />
    </>
  );
};

export default AddTransPopup;
