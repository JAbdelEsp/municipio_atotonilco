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
import CancelButton from "../form/CancelButton";
interface DirectionsPopupProps {
  title: string;
  setFile: any;
  setText: any;
  onSubmit: any;
}

const DirectionsInfoPopup = ({
  title,
  onSubmit,
  setFile,
  setText,
}: DirectionsPopupProps) => {
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
  const date = new Date();
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleChange = (html: any) => {
    setText(html);
  };
  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Grid container>
            <Grid item xs={12} mt={2}>
              <FormTextField label="Nombre (s)" name="name" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField
                label="Apellidos"
                name="lastname"
                isRequired={true}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField label="Area" name="area" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Grid item xs={12} mt={2}>
                <label htmlFor="">Contenido</label>
                <CustomToolbar />
                <ReactQuill
                  modules={modules}
                  formats={formats}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} mt={2}>
              <input
                type="file"
                name="picture"
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

export default DirectionsInfoPopup;
