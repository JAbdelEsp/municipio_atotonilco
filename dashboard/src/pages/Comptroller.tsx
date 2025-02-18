import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import ComptrollerTable from "../components/Comptroller/ComptrollerTable";
import ComptrollerInfoTable from "../components/Comptroller/ComptrollerInfoTable";
import BuzonTable from "../components/Comptroller/BuzonTable";

export default function Comptroller() {
  const dispatch = useAppDispatch();
  const openModalAddComptroller = () => {
    dispatch(openModal({ modalName: "addComptroller", modalProps: {} }));
  };
  const handleOpenUpdateComptrollerPopup = (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => {
    dispatch(
      openModal({
        modalName: "addComptrollerMultipleFiles",
        modalProps: {
          trimester,
          comptrollerId: id,
          year: year,
          file_name: file_name,
        },
      })
    );
  };

  const openModalAddPublicInfo = () => {
    dispatch(
      openModal({
        modalName: "addPublicInfoComp",
        modalProps: {},
      })
    );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <AddButton
            text="Agregar Nuevo Registro"
            onClickAction={() => {
              openModalAddComptroller();
            }}
          />
          <AddButton
            text="Agregar Archivos"
            onClickAction={() => {
              openModalAddPublicInfo();
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid item>
            <PageHeader title="Controlaria Interna Municipal Archivos" />
          </Grid>
          <ComptrollerInfoTable
            onClickUpload={function (
              trimester: string,
              id: string,
              year: string,
              file_name: string
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} spacing={2}>
          <Grid item>
            <PageHeader title="Buzón de Quejas y Sugerencias" />
          </Grid>
          <BuzonTable onClickUpload={handleOpenUpdateComptrollerPopup} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid item>
            <PageHeader title="Contraloria Interna Municipal Indicadores" />
          </Grid>
          <ComptrollerTable onClickUpload={handleOpenUpdateComptrollerPopup} />
        </Grid>
      </Grid>
    </>
  );
}
