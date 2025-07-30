import { Grid, SelectChangeEvent } from "@mui/material";
import { createTask, Task, uploadPics } from "../../slices/taskSlice";
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
import CancelButton from "../form/CancelButton";
interface TaskPicsPopupProps {
  title: string;
  titleNew: string;
  taskId: string;
  setTask: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
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

const PicsPopup = ({
  title,
  titleNew,
  taskId,
  setTask,
  onSubmit,
}: TaskPicsPopupProps) => {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  const [text, setText] = useState("");
  const date = new Date();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<any>(null);
  const handleChange = (html: any) => {
    setText(html);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("title", titleNew);
    await dispatch(uploadPics(formData));
    dispatch(closeModal());
  };
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container>
            <Grid item xs={12} mt={2}>
              <input type="text" name="id_news" value={taskId} hidden />
              <input
                type="file"
                name="pic"
                multiple
                onChange={(e: any) => setFile(e.target.files)}
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

export default PicsPopup;
