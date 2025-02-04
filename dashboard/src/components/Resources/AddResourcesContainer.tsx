import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";

import {
  createResource,
  getAreas,
  getRequeriments,
  getResources,
} from "../../slices/resourcesSlices";
import AddResourcesPopup from "./AddResourcesPopup";

interface AddResourcesPopupProps {
  params: [];
  req: [];
}

const AddResourcesContainer = ({ params, req }: AddResourcesPopupProps) => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<string[]>([]);
  const [requ, setRequ] = useState<string[]>([]);
  const [online, setOnline] = useState(false);
  useEffect(() => {
    params.map((opt: any) =>
      setOptions((prevState) => [...prevState, opt.name])
    );
  }, []);
  const submitNewResources = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("requeriment", JSON.stringify(requ));
    await dispatch(createResource(formData));
    await dispatch(getResources());
    dispatch(closeModal());
  };

  return (
    <>
      <AddResourcesPopup
        title="Agregar Nuevo Registro"
        onSubmit={submitNewResources}
        params={options}
        req={req}
        setRequ={setRequ}
        setOnline={setOnline}
      />
    </>
  );
};

export default AddResourcesContainer;
