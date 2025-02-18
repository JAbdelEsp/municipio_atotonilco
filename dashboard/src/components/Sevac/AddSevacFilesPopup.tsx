import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import TransPopup from "./SevacPopup";
import { closeModal } from "../../slices/modalSlice";
import SevacPopup from "./SevacPopup";
import { getSevac, NewSevacFinal, updateSevac } from "../../slices/sevacSlice";
interface AddSevacPopupProps {
  column: string;
  sevacId: string;
  year: string;
  section: string;
}

const AddSevacFilesPopup = ({
  column,
  sevacId,
  year,
  section,
}: AddSevacPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", sevacId);
    formData.append("column", column);
    await dispatch(updateSevac(formData as unknown as NewSevacFinal));
    await dispatch(getSevac());
    dispatch(closeModal());
  };
  return (
    <>
      <SevacPopup
        title="Agregar Archivo"
        section={section}
        column={column}
        sevacId={sevacId}
        year={year}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddSevacFilesPopup;
