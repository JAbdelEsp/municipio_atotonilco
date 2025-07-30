import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewObras,
  Obras,
  NewObrasFinal,
  createObras,
  getObras,
} from "../../slices/obrasSlice";
import { useEffect, useState } from "react";
import { closeModal } from "../../slices/modalSlice";
import ObrasPopup from "./ObrasPopup";
interface AddObrasPopupProps {
  // taskId: string;
}

const AddObrasPopup = ({}: AddObrasPopupProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getObras());
  }, [dispatch]);
  const [obras, setObras] = useState<NewObras>({
    no_obra: "",
    nombre: "",
    contrato: "",
    convocatoria: "",
    date: "",
  });

  const submitNewTask = async () => {
      await dispatch(createObras(obras as NewObrasFinal));
      await dispatch(getObras());
  };

  return (
    <>
      <ObrasPopup
        title="Agregar Nuevo Registro"
        obras={obras}
        setObras={setObras}
        onSubmit={submitNewTask}
      />
    </>
  );
};

export default AddObrasPopup;
