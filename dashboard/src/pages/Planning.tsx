import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";
import PlanningTable from "../components/Planning/PlanningTable";

export default function Planning() {
  const dispatch = useAppDispatch();
  const openModalAddPlanning = () => {
    dispatch(openModal({ modalName: "addPlanning", modalProps: {} }));
  };
  const handleOpenUpdatePlanningPopup = (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => {
    dispatch(
      openModal({
        modalName: "addPlanningMultipleFiles",
        modalProps: {
          trimester,
          planningId: id,
          year: year,
          file_name: file_name,
        },
      })
    );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Planeación" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Nuevo"
            onClickAction={() => {
              openModalAddPlanning();
            }}
          />
        </Grid>
      </Grid>
      <PlanningTable onClickUpload={handleOpenUpdatePlanningPopup} />
    </>
  );
}
