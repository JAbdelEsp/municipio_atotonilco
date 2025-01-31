import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import TransInfoPopup from "./PlanningInfoPopup";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import { deletePlanning, getPlanning } from "../../slices/planningSlice";
interface DeletePlanningPopupProps {
  params: any;
}

const DeletePlanningPopup = ({ params }: DeletePlanningPopupProps) => {
  const dispatch = useAppDispatch();
  const deletePlanningOnSubmit = async () => {
    await dispatch(deletePlanning(params));
    dispatch(closeModal());
    dispatch(getPlanning());
  };

  return (
    <>
      <DeleteWarnPopup
        title={`Eliminar Registro "${params.file_name}"`}
        onSubmit={deletePlanningOnSubmit}
      />
    </>
  );
};

export default DeletePlanningPopup;
