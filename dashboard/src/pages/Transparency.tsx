import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";
import TransTable from "../components/Transparency/transTable";

export default function Transparency() {
  const dispatch = useAppDispatch();
  const openModalAddTrans = () => {
    dispatch(openModal({ modalName: "addTrans", modalProps: {} }));
  };
  const handleOpenUpdateTransPopup = (
    trimester: string,
    id: string,
    year: string,
    article: string
  ) => {
    dispatch(
      openModal({
        modalName: "addFiles",
        modalProps: { trimester, transId: id, year: year, article: article },
      })
    );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Transparencia" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Nuevo"
            onClickAction={() => {
              openModalAddTrans();
            }}
          />
        </Grid>
      </Grid>
      <TransTable onClickUpload={handleOpenUpdateTransPopup} />
    </>
  );
}
