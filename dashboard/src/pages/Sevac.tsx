import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";
import SevacTable from "../components/Sevac/SevacTable";

export default function Sevac() {
  const dispatch = useAppDispatch();
  const openModalAddSevac = () => {
    dispatch(openModal({ modalName: "addSevac", modalProps: {} }));
  };
  const handleOpenUpdateSevacPopup = (
    trimester: string,
    id: string,
    year: string,
    section: string
  ) => {
    dispatch(
      openModal({
        modalName: "addMultipleFiles",
        modalProps: {
          trimester,
          transId: id,
          year: year,
          section: section,
        },
      })
    );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Sevac" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Nuevo"
            onClickAction={() => {
              openModalAddSevac();
            }}
          />
        </Grid>
      </Grid>
      <SevacTable onClickUpload={handleOpenUpdateSevacPopup} />
    </>
  );
}
