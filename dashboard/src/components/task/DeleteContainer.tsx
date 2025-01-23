import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  NewTask,
  Task,
  NewTaskFinal,
  createTask,
  getTasks,
  deleteTask,
  deletePictures,
} from "../../slices/taskSlice";
import { closeModal } from "../../slices/modalSlice";
import DeletePopup from "./DeletePopup";
interface DeletePopupProps {
  id: string;
  title: string;
}

const DeleteContainer = ({ id, title }: DeletePopupProps) => {
  const dispatch = useAppDispatch();
  const deleteOnSubmit = async () => {
    const data = {
      id: id,
      title: title,
    };
    await dispatch(deleteTask({ id: id, title: title }));
    await dispatch(getTasks());
    dispatch(closeModal());
  };

  return (
    <>
      <DeletePopup title="Eliminar Registro" onSubmit={deleteOnSubmit} />
    </>
  );
};

export default DeleteContainer;
