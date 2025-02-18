import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import { getBuzon } from "../../slices/comptrollerSlice";

interface ComptrollerTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => void;
}

type BuzonTableInfo = {
  id: string;
  folio: string;
  type: string;
  date_time: string;
  place: string;
  name: string;
  lastname: string;
  address: string;
  email: string;
  phone: string;
  public_server: string;
  charge: string;
  area: string;
  description: string;
  status: string;
};

export default function BuzonTable({ onClickUpload }: ComptrollerTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [buzonTableInfo, setBuzonTableInfo] = useState<BuzonTableInfo[]>([]);
  const publicInfo = useAppSelector((state) => state.comptroller.publicInfo);
  const buzon = useAppSelector((state) => state.comptroller.buzon);
  const comptrollerStatus = useAppSelector((state) => state.comptroller.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deletePublicInfoComp",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "folio", headerName: "Número de Folio", width: 280 },
    {
      field: "type",
      headerName: "Tipo de Buzón",
      width: 200,
    },
    {
      field: "date_time",
      headerName: "Fecha y Hora de los Hechos",
      width: 200,
    },
    { field: "place", headerName: "Lugar de los Hechos", width: 200 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "lastname", headerName: "Apellido", width: 200 },
    { field: "address", headerName: "Dirección", width: 400 },
    { field: "email", headerName: "Correo Electrónico", width: 200 },
    { field: "phone", headerName: "Número de Teléfono", width: 200 },
    {
      field: "public_server",
      headerName: "Nombre Servidor Público",
      width: 200,
    },
    { field: "charge", headerName: "Cargo Servidor Público", width: 200 },
    { field: "area", headerName: "Área de Servicio", width: 200 },
    {
      field: "description",
      headerName: "Descripción de los hechos",
      width: 600,
    },
    { field: "status", headerName: "Status", width: 200 },

    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="error"
              aria-label="edit-task"
              onClick={() => onClickDelete(params.row)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              aria-label="edit-task"
              onClick={() => onClickDelete(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClickEdit = (params: any) => {
    dispatch(
      openModal({ modalName: "editBuzon", modalProps: { params: params } })
    );
  };
  useEffect(() => {
    if (comptrollerStatus === "idle") {
      dispatch(getBuzon());
      // dispatch(getPublicInfo());
    }
  }, [dispatch]);
  useEffect(() => {
    if (buzon.length !== undefined) {
      setBuzonTableInfo(
        buzon.map((buz: any) => {
          return {
            id: buz.id,
            folio: buz.folio,
            type: buz.type,
            date_time: buz.date_time,
            place: buz.place,
            name: buz.name,
            lastname: buz.lastname,
            address: buz.address,
            email: buz.email,
            phone: buz.phone,
            public_server: buz.public_server,
            charge: buz.charge,
            area: buz.area,
            description: buz.description,
            status: buz.status,
          };
        })
      );
    } else {
      setBuzonTableInfo([]);
    }
  }, [publicInfo]);
  return (
    <Table columns={columns} rows={buzonTableInfo ? buzonTableInfo : []} />
  );
}
