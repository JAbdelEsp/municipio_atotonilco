import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";
import { openModal, closeModal } from "../slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import Grid from "@mui/material/Grid";
import ResourcesTable from "../components/Resources/ResourcesTable";
import { useEffect, useState } from "react";
import {
  AreasBasicInfo,
  getAreas,
  getRequeriments,
  getResourcesByid,
} from "../slices/resourcesSlices";

type AreasTableInfo = {
  id: string;
  name: string;
  manager: string;
};

type ReqTableInfo = {
  id: string;
  description: string;
  date: string;
  user: string;
};

export default function Resources() {
  const dispatch = useAppDispatch();
  const areas = useAppSelector((state) => state.resources.areas);
  const areasStatus = useAppSelector((state) => state.resources.status);
  const req = useAppSelector((state) => state.resources.req);

  const handleOpenUpdateResourcesPopup = async (id: any) => {
    dispatch(
      openModal({
        modalName: "editResources",
        modalProps: { id: id },
      })
    );
  };

  const openModalAddResources = (areas: any) => {
    dispatch(
      openModal({
        modalName: "addResources",
        modalProps: { params: areas, req: req },
      })
    );
  };
  useEffect(() => {
    if (areasStatus === "idle") {
      dispatch(getAreas());
      dispatch(getRequeriments());
    }
  }, [dispatch]);

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PageHeader title="Tramites y Servicios" />
        </Grid>
        <Grid item>
          <AddButton
            text="Agregar Tramite / Servicio"
            onClickAction={() => openModalAddResources(areas)}
          />
        </Grid>
      </Grid>
      <ResourcesTable onClickUpdate={handleOpenUpdateResourcesPopup} />
    </>
  );
}
