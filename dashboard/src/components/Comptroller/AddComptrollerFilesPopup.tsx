import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import {
  getComptroller,
  NewComptrollerFinal,
  updateComptroller,
} from "../../slices/comptrollerSlice";
import ComptrollerPopup from "./ComptrollerPopup";
interface AddComptrollerPopupProps {
  column: string;
  comptrollerId: string;
  year: string;
  file_name: string;
}

const AddComptrollerFilesPopup = ({
  column,
  comptrollerId,
  year,
  file_name,
}: AddComptrollerPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewComptroller = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", comptrollerId);
    formData.append("column", column);
    await dispatch(
      updateComptroller(formData as unknown as NewComptrollerFinal)
    );
    await dispatch(getComptroller());
    dispatch(closeModal());
  };
  return (
    <>
      <ComptrollerPopup
        title="Agregar Archivo"
        file_name={file_name}
        column={column}
        comptrollerId={comptrollerId}
        year={year}
        onSubmit={submitNewComptroller}
      />
    </>
  );
};

export default AddComptrollerFilesPopup;
