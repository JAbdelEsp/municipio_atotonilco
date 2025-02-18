import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";

import {
  createResource,
  getAreas,
  getRequeriments,
  getResources,
  updateResource,
} from "../../slices/resourcesSlices";
import AddResourcesPopup from "./AddResourcesPopup";
import EditResourcesPopup from "./EditResourcesPopup";

interface EditResourcesPopupProps {
  params: [];
  req: [];
  id: number;
}

const EditResourcesContainer = ({
  params,
  id,
  req,
}: EditResourcesPopupProps) => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<string[]>([]);
  const [requ, setRequ] = useState<string[]>([]);
  const [online, setOnline] = useState(false);

  const submitNewResources = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("requeriment", JSON.stringify(requ));
    await dispatch(updateResource(formData));
    await dispatch(getResources());
    dispatch(closeModal());
  };

  return (
    <>
      <EditResourcesPopup
        title="Editar Registro"
        onSubmit={submitNewResources}
        id={id}
        setRequ={setRequ}
        setOnline={setOnline}
      />
    </>
  );
};

export default EditResourcesContainer;
