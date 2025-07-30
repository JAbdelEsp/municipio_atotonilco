import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import { createTheasure, getTheasure } from "../../slices/theasureSlice";
import TheasureInfoPopup from "./TheasureInfoPopup";
interface AddTheasurePopupProps {
  // taskId: string;
}

const AddTheasurePopup = ({}: AddTheasurePopupProps) => {
  const dispatch = useAppDispatch();

  const submitTheasure = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    await dispatch(createTheasure(formData));
    await dispatch(getTheasure());
    dispatch(closeModal());
  };

  return (
    <>
      <TheasureInfoPopup
        title="Agregar Registro Tesorería"
        onSubmit={submitTheasure}
      />
    </>
  );
};

export default AddTheasurePopup;