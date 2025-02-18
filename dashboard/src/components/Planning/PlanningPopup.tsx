import { Grid, SelectChangeEvent } from "@mui/material";
import { createTask, Task } from "../../slices/taskSlice";
import { SyntheticEvent, useEffect, useState } from "react";
import FormTextField from "../form/FormTextField";
import FormModal from "../modal/FormModal";
import FormSelectionField from "../form/FormSelectionField";
import { NewTask } from "../../slices/taskSlice";
import FormTextAreaField from "../form/FormTextAreaField";
import { PRIORITY_LIST, TASK_STATUS_LIST } from "../../constants";
import "../../styles/task.scss";
import ProjectAutoCompleteField from "../dropdowns/ProjectAutoCompleteField";
import AssigneeAutoCompleteField from "../dropdowns/AssigneeAutoCompleteField";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import ReactQuill, { Quill } from "react-quill";
import CustomToolbar from "../form/CustomToolbar";
import "react-quill/dist/quill.snow.css";
import { closeModal } from "../../slices/modalSlice";
import SubmitButton from "../form/SubmitButton";
import { updateTrans } from "../../slices/transSlice";
import CancelButton from "../form/CancelButton";
interface PlanningPopupProps {
  title: string;
  planningId: string;
  file_name: string;
  year: string;
  column: string;
  onSubmit: any;
}

type PlanningTableInfo = {
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

const PlanningPopup = ({
  title,
  planningId,
  file_name,
  year,
  column,
  onSubmit,
}: PlanningPopupProps) => {
  const date = new Date();
  const [file, setFile] = useState<any>(null);
  const dispatch = useAppDispatch();
  const planning = useAppSelector((state) => state.planning.planning);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Grid container>
            <Grid item xs={12} mt={2}>
              <input type="text" value={year} hidden name="year" />
              <input type="text" value={column} hidden name="column" />
              <input type="text" value={file_name} hidden name="file_name" />
              <input
                type="file"
                name="file"
                multiple
                onChange={(e: any) => setFile(e.target.files[0])}
              />
            </Grid>
            <Grid container justifyContent="space-between" mt={2}>
              <Grid item xs={5}>
                <SubmitButton type="submit" text="Guardar" />
              </Grid>
              <Grid item xs={5}>
                <CancelButton onClick={handleClose} />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormModal>
    </>
  );
};

export default PlanningPopup;
