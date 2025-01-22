import TasksTable from "../components/task/TasksTable";
import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";

export default function News() {
  const dispatch = useAppDispatch();
  const openModalAddTask = () => {
    dispatch(openModal({ modalName: "addTask", modalProps: {} }));
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
          <PageHeader title="Noticias" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Nuevo"
            onClickAction={() => {
              openModalAddTask();
            }}
          />
        </Grid>
      </Grid>
      <TasksTable onClickEdit={handleOpenUpdateTaskPopup} />
    </>
  );
}
