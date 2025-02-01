import { useAppDispatch } from "../../hooks/redux-hooks";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import {
  deletePlanning,
  deletePublic,
  getPlanning,
  getPublicInfo,
} from "../../slices/planningSlice";
interface DeletePublicPopupProps {
  params: any;
}

const DeletePublicPopup = ({ params }: DeletePublicPopupProps) => {
  const dispatch = useAppDispatch();
  const deletePublicOnSubmit = async () => {
    await dispatch(deletePublic(params));
    dispatch(closeModal());
    dispatch(getPublicInfo());
  };

  return (
    <>
      <DeleteWarnPopup
        title={`Eliminar Registro "${params.description}"`}
        onSubmit={deletePublicOnSubmit}
      />
    </>
  );
};

export default DeletePublicPopup;
