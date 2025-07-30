import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { getObras } from "../../slices/obrasSlice";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";

interface ObrasTableProps {
  onClickEdit: (id: string) => void;
}

type ObrasTableInfo = {
  id: string;
  no_obra: string;
  nombre: string;
  contrato: string;
  convocatoria: string;
  date: string;
};

export default function ObrasTable({ onClickEdit }: ObrasTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [obrasTableInfo, setObrasTableInfo] = useState<ObrasTableInfo[]>([]);
  const obras = useAppSelector((state) => state.obras.obras);
  const obrasStatus = useAppSelector((state) => state.obras.status);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "no_obra", headerName: "No Obra", width: 500 },
    { field: "nombre", headerName: "Nombre", width: 130 },
    { field: "contrato", headerName: "Contrato", width: 400 },
    { field: "date", headerName: "Fecha de Publicación", width: 150 },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="warning"
              aria-label="edit-task"
              onClick={() => onClickEdit(params.row.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              aria-label="edit-task"
              onClick={() =>
                onClickDelete(params.row.id_news, params.row.title)
              }
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClickDelete = (id: number, title: string) => {
    dispatch(
      openModal({ modalName: "Delete", modalProps: { id: id, title: title } })
    );
  };

  useEffect(() => {
    if (obrasStatus === "idle") {
      dispatch(getObras());
    }
  }, [dispatch]);

  useEffect(() => {
    if (obras.length > 0) {
      setObrasTableInfo(
        obras.map((obra) => {
          return {
            id: obra.id,
            no_obra: obra.no_obra,
            nombre: obra.nombre,
            contrato: obra.contrato,
            convocatoria: obra.convocatoria,
            date: obra.date,
          };
        })
      );
    } else {
      setObrasTableInfo([]);
    }
  }, [obras]);

  return (
    <Table columns={columns} rows={obrasTableInfo ? obrasTableInfo : []} />
  );
}
