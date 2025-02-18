import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import SevacInfoPopup from "./ComptrollerInfoPopup";
import { createSevac, getSevac } from "../../slices/sevacSlice";
import {
  createComptroller,
  getComptroller,
  NewComptroller,
} from "../../slices/comptrollerSlice";
import ComptrollerInfoPopup from "./ComptrollerInfoPopup";
interface AddComptrollerPopupProps {
  // taskId: string;
}

const AddComptrollerPopup = ({}: AddComptrollerPopupProps) => {
  const dispatch = useAppDispatch();
  const [planning, setPlanning] = useState<NewComptroller>({
    id: "",
    file: "",
  });

  const submitNewComptroller = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("file_name");
    formData.append("id_comptroller", name + "comptroller");
    await dispatch(createComptroller(formData));
    await dispatch(getComptroller());
    dispatch(closeModal());
  };

  return (
    <>
      <ComptrollerInfoPopup
        title="Agregar Nuevo Registro"
        onSubmit={submitNewComptroller}
      />
    </>
  );
};

export default AddComptrollerPopup;
