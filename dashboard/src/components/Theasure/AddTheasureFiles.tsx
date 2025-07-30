import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import TheasurePopup from "./TheasurePopup";
import {
  getTheasure,
  NewTheasureFinal,
  updateTheasure,
} from "../../slices/theasureSlice";
interface AddTheasurePopupProps {
  column: string;
  theasureId: string;
  year: string;
  table_name: string;
}

const AddTheasureFiles = ({
  column,
  theasureId,
  year,
  table_name,
}: AddTheasurePopupProps) => {
  const dispatch = useAppDispatch();
  const submitTheasure = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.append("id", theasureId)
    const table = formData.append("table_name", table_name)
    await dispatch(updateTheasure(formData as unknown as NewTheasureFinal));
    await dispatch(getTheasure());
    dispatch(closeModal());
  };
  return (
    <>
      <TheasurePopup
        title="Agregar Archivo"
        table_name={table_name}
        column={column}
        theasureId={theasureId}
        year={year}
        onSubmit={submitTheasure}
      />
    </>
  );
};

export default AddTheasureFiles;