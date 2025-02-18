import { useAppDispatch } from "../../hooks/redux-hooks";
import DeleteWarnPopup from "./DeleteWarnPopup";
import { closeModal } from "../../slices/modalSlice";
import {
  deletePublic,
  getComptrollerPublicInfo,
} from "../../slices/comptrollerSlice";
interface DeletePublicPopupProps {
  params: any;
}

const DeletePublicPopupComp = ({ params }: DeletePublicPopupProps) => {
  const dispatch = useAppDispatch();
  const deletePublicOnSubmit = async () => {
    await dispatch(deletePublic(params));
    dispatch(closeModal());
    dispatch(getComptrollerPublicInfo());
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

export default DeletePublicPopupComp;
