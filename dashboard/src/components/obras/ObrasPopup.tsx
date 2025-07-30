import { Grid, SelectChangeEvent } from "@mui/material";
import { createObras, getObras, Obras, obrasSlice } from "../../slices/obrasSlice";
import { SyntheticEvent, useEffect, useState } from "react";
import FormTextField from "../form/FormTextField";
import FormModal from "../modal/FormModal";
import FormSelectionField from "../form/FormSelectionField";
import { NewObras } from "../../slices/obrasSlice";
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
import { create } from "node:domain";
import { taskCompleted } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
interface ObrasPopupProps {
  title: string;
  obras: Obras | NewObras;
  setObras: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
}

type ObrasTableInfo = {
  id: string;
  no_obra: string;
  contrato: string;
  convocatoria: string;
  date: string
};

const ObrasPopup = ({ title, obras, setObras, onSubmit }: ObrasPopupProps) => {
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
  const [obrasTableInfo, setObrasTableInfo] = useState<ObrasTableInfo[]>([]);
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const date = new Date();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<any>(null);
  useEffect(() => {
    setObras({
      ...obras,
    });
  }, []);
  const handleChange = (html: any) => {
    setText(html);
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("date", date.toLocaleString("en-US"));
    formData.append("contrato", file.name);
    await dispatch(createObras(formData));
    await dispatch(getObras());
  };

  const validatingSize = (size: any) => {
    if (size.size > 2504018) {
      setDisabled(true);
      setMessage("Error: Selecciona un archivo menor a 2.5Mb");
    } else {
      setDisabled(false);
      setMessage("");
    }
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
              <FormTextField label="No Obra" name="no_obra" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField label="Nombre" name="nombre" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField label="convocatoria" name="convocatoria" isRequired={false} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <input
                required
                type="file"
                name="contrato"
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={2}>
              <span style={{ color: "red", fontWeight: "bolder" }}>
                {message}
              </span>
            </Grid>
            <Grid container justifyContent="space-between" mt={2}>
              <Grid item xs={5}>
                <SubmitButton
                  type="submit"
                  text="Guardar"
                  disabled={false}
                />
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

export default ObrasPopup;
