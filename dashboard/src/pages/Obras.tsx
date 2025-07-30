import ObrasTable from "../components/obras/ObrasTable";
import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";

export default function Obras() {
  const dispatch = useAppDispatch();
  const openModalAddObras = () => {
    dispatch(openModal({ modalName: "addObras", modalProps: {} }));
  };
  const handleOpenUpdateTaskPopup = (id: string) => {
    dispatch(
      openModal({ modalName: "updateTask", modalProps: { taskId: id } })
    );
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Obras Públicas" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Nuevo"
            onClickAction={() => {
              openModalAddObras();
            }}
          />
        </Grid>
      </Grid>
      <ObrasTable onClickEdit={handleOpenUpdateTaskPopup} />
    </>
  );
}
