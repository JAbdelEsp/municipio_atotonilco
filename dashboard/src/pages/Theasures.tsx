import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
// import ModalPopup from "../components/ModalPopup";
import { useState } from "react";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import { getTasks } from "../slices/taskSlice";
import PlanningTable from "../components/Planning/PlanningTable";
import PublicInfoTable from "../components/Planning/PublicInfoTable";
import TheasureTable from "../components/Theasure/TheasureTable";

export default function Theasure() {
  const dispatch = useAppDispatch();
  const openModalAdd = () => {
    dispatch(openModal({ modalName: "addTheasure", modalProps: {} }));
  };
  const handleUploadTheasureFiles = (
    trimester: string,
    id: string,
    year: string,
    table_name: string,
  ) => {
    dispatch(
      openModal({
        modalName: "addTheasureFiles",
        modalProps: {
          trimester,
          theasureId: id,
          year: year,
          table_name: table_name,
        },
      })
    );
  };

  const openModalAddPublicInfo = () => {
    dispatch(
      openModal({
        modalName: "addPublicInfo",
        modalProps: {},
      })
    );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Información Trimestral" />
        </Grid>
        <Grid item>
          <AddButton
            text="Información"
            onClickAction={() => {
              openModalAdd();
            }}
          />
        </Grid>
      </Grid>
      <TheasureTable onClickUpload={handleUploadTheasureFiles} />
    </>
  );
}