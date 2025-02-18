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
import FormCheckboxField from "../form/FormCheckbox";
import { createResource, getResourcesByid } from "../../slices/resourcesSlices";
interface ResourcesPopupProps {
  title: string;
  onSubmit: any;
  setRequ: any;
  setOnline: any;
  id: number;
}

const EditResourcesPopup = ({
  title,
  id,
  setRequ,
  setOnline,
  onSubmit,
}: ResourcesPopupProps) => {
  const date = new Date();
  const dispatch = useAppDispatch();
  const resourcesId = useAppSelector((state) => state.resources.resourcesId);
  const req = useAppSelector((state) => state.resources.req);
  const [area, setArea] = useState();

  useEffect(() => {
    dispatch(getResourcesByid(id));
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const _onChange = async (e: any) => {
    setRequ((prevState: any) => [...prevState, e.name]);
  };

  const _onLineChange = async (e: any) => {
    setOnline(e.checked);
  };

  return (
    <>
      <FormModal title={title} classNames="task modal-form">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <input type="text" name="id" value={1} hidden />
              <FormTextField
                label="Nombre del Tramite o Servicio"
                name="description"
                value={resourcesId[0] && resourcesId[0].description}
                isRequired={true}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormTextField label="Costo $" name="price" isRequired={true} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <label htmlFor="">Selecciona los Requisitos</label>
              {req !== undefined &&
                req.map((item: any) => (
                  <FormCheckboxField
                    label={item.description}
                    name={item.description}
                    isRequired={false}
                    onChange={(e: any) => _onChange(e.target)}
                  />
                ))}
            </Grid>
            <Grid item xs={12} mt={2}>
              <label htmlFor="">Tramite en Línea</label>
              <FormCheckboxField
                label="Tramite Online"
                name="online"
                onChange={(e: any) => _onLineChange(e.target)}
                isRequired={false}
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

export default EditResourcesPopup;
