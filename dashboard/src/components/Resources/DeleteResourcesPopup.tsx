import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
} from "../../slices/taskSlice";
import { useEffect, useState } from "react";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import { deleteResource, getResources } from "../../slices/resourcesSlices";
interface DeleteResourcesPopupProps {
  id: string;
  description: string;
}

const DeleteResourcesPopup = ({
  id,
  description,
}: DeleteResourcesPopupProps) => {
  const dispatch = useAppDispatch();

  const deleteResourcesOnSubmit = async () => {
    console.log("onSubmit: ", id);
    await dispatch(deleteResource(id));
    dispatch(closeModal());
    dispatch(getResources());
  };

  return (
    <>
      <DeleteWarnPopup
        title="Eliminar Registro"
        onSubmit={deleteResourcesOnSubmit}
      />
    </>
  );
};

export default DeleteResourcesPopup;
