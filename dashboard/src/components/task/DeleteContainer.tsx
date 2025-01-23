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
  id: number;
}

const DeleteContainer = ({ id }: DeletePopupProps) => {
  const dispatch = useAppDispatch();
  const deleteOnSubmit = async () => {
    await dispatch(deleteTask(id));
    dispatch(closeModal());
    dispatch(getTasks());
  };

  return (
    <>
      <DeletePopup title="Eliminar Registro" onSubmit={deleteOnSubmit} />
    </>
  );
};

export default DeleteContainer;
