import { Grid, SelectChangeEvent } from "@mui/material";
import FormModal from "../modal/FormModal";
import "../../styles/task.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import "react-quill/dist/quill.snow.css";
import { closeModal } from "../../slices/modalSlice";
import SubmitButton from "../form/SubmitButton";
import CancelButton from "../form/CancelButton";
import { deleteTrans } from "../../slices/transSlice";
interface TransPopupProps {
  title: string;
  onSubmit: any;
}
type TasksTableInfo = {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  views: string;
  time: string;
  image: string;
  neighborhood: string;
};

const DeleteWarnPopup = ({ title, onSubmit }: TransPopupProps) => {
  const date = new Date();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <Grid container>
          <Grid item xs={12} mt={2}>
            <h3>Estas seguro de eliminar el registro?</h3>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" mt={2}>
          <Grid item xs={5}>
            <SubmitButton type="submit" onClick={onSubmit} text="Eliminar" />
          </Grid>
          <Grid item xs={5}>
            <CancelButton onClick={handleClose} />
          </Grid>
        </Grid>
      </FormModal>
    </>
  );
};

export default DeleteWarnPopup;
