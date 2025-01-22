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
import CancelButton from "../form/CancelButton";
interface TaskPopupProps {
  title: string;
  task: Task | NewTask;
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

const TaskPopup = ({ title, task, setTask, onSubmit }: TaskPopupProps) => {
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
  const [tasksTableInfo, setTasksTableInfo] = useState<TasksTableInfo[]>([]);
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const date = new Date();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<any>(null);
  useEffect(() => {
    setTask({
      ...task,
      id_news: "N-" + (tasks.length - 1 + 2),
    });
  }, []);
  const handleChange = (html: any) => {
    setText(html);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("path", "news");
    formData.append("views", "0");
    formData.append("date", date.toLocaleString("en-US"));
    formData.append("id_news", "N-" + (tasks.length - 1));
    formData.append("content", text);
    dispatch(createTask(formData));
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
              <FormTextField label="Titulo" name="title" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField label="Autor" name="author" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField
                label="Tiempo de Lectura"
                name="time"
                isRequired={true}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField
                label="Ubicación"
                name="neighborhood"
                isRequired={true}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <label htmlFor="">Contenido</label>
              <CustomToolbar />
              <ReactQuill
                modules={modules}
                formats={formats}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <input
                type="file"
                name="image"
                onChange={(e: any) => setFile(e.target.files[0])}
              />
            </Grid>
            <Grid item xs={5} style={{ marginTop: "2em" }}>
              <SubmitButton type="submit" text="Guardar" />
            </Grid>
            <Grid item xs={5}>
              <CancelButton onClick={handleClose} />
            </Grid>
          </Grid>
        </form>
      </FormModal>
    </>
  );
};

export default TaskPopup;
