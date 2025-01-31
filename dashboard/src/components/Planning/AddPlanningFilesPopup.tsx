import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import PlanningPopup from "./PlanningPopup";
import {
  getPlanning,
  NewPlanningFinal,
  updatePlanning,
} from "../../slices/planningSlice";
interface AddPlanningPopupProps {
  column: string;
  planningId: string;
  year: string;
  file_name: string;
}

const AddPlanningFilesPopup = ({
  column,
  planningId,
  year,
  file_name,
}: AddPlanningPopupProps) => {
  const dispatch = useAppDispatch();
  const submitNewPlanning = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", planningId);
    formData.append("column", column);
    await dispatch(updatePlanning(formData as unknown as NewPlanningFinal));
    await dispatch(getPlanning());
    dispatch(closeModal());
  };
  return (
    <>
      <PlanningPopup
        title="Agregar Archivo"
        file_name={file_name}
        column={column}
        planningId={planningId}
        year={year}
        onSubmit={submitNewPlanning}
      />
    </>
  );
};

export default AddPlanningFilesPopup;
