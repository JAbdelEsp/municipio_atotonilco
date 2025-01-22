import { Grid, SelectChangeEvent } from "@mui/material";
import { createTask, Task } from "../../slices/taskSlice";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
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
interface TaskPopupProps {
  title: string;
  params: any;
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

const EditTransInfoPopup = ({ title, params, onSubmit }: TaskPopupProps) => {
  console.log(params);
  const date = new Date();
  const [file, setFile] = useState<any>(null);
  const [article, setArticle] = useState("");
  const [year, setYear] = useState("");
  const [fraction, setFraction] = useState();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const handleClose = () => {
    dispatch(closeModal());
  };
  useEffect(() => {
    setArticle(params.article);
    setYear(params.year);
    setFraction(params.fraction);
  }, []);
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "article":
        console.log(article);
        setArticle(value);
        break;
      case "year":
        setYear(value);
        break;
    }
  };
  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Grid container>
            <Grid item xs={12} mt={2}>
              <FormSelectionField
                label="Selecciona Artículo"
                name="article"
                value={article}
                options={["69", "70"]}
                isRequired={true}
                onChange={onChangeSelect}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormSelectionField
                label="Selecciona Año"
                name="year"
                value={year}
                options={[
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                  "2025",
                ]}
                isRequired={true}
                onChange={onChangeSelect}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField
                value={fraction}
                label="Fracción"
                name="fraction"
                onChange={(e: any) => setFraction(e.target.value)}
                isRequired={true}
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

export default EditTransInfoPopup;
