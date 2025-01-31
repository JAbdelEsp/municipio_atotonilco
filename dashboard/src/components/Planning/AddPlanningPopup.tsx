import { useAppDispatch } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import SevacInfoPopup from "./PlanningInfoPopup";
import { createSevac, getSevac } from "../../slices/sevacSlice";
import {
  createPlanning,
  getPlanning,
  NewPlanning,
} from "../../slices/planningSlice";
import PlanningInfoPopup from "./PlanningInfoPopup";
interface AddPlanningPopupProps {
  // taskId: string;
}

const AddPlanningPopup = ({}: AddPlanningPopupProps) => {
  const dispatch = useAppDispatch();
  const [planning, setPlanning] = useState<NewPlanning>({
    id: "",
    file: "",
  });

  const submitNewPlanning = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("file_name");
    formData.append("id_planning", name + "planning");
    await dispatch(createPlanning(formData));
    await dispatch(getPlanning());
    dispatch(closeModal());
  };

  return (
    <>
      <PlanningInfoPopup
        title="Agregar Nuevo Registro"
        onSubmit={submitNewPlanning}
      />
    </>
  );
};

export default AddPlanningPopup;
