import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import { getRequeriments, getResources } from "../../slices/resourcesSlices";

interface ResourcesTableProps {
  onClickUpdate: any;
}

type ResourcesTableInfo = {
  id: string;
  area: string;
  description: string;
  requeriment: string;
  price: string;
  date: string;
  user: string;
};

export default function ResourcesTable({ onClickUpdate }: ResourcesTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [resourcesTableInfo, setResourcesTableInfo] = useState<
    ResourcesTableInfo[]
  >([]);
  const resources = useAppSelector((state) => state.resources.resources);
  const resourcesStatus = useAppSelector((state) => state.resources.status);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "description", headerName: "Tramite o Servicio", width: 500 },
    { field: "area", headerName: "Área", width: 130 },
    {
      field: "requeriment",
      headerName: "Requisitos",
      width: 400,
      renderCell: (params) => {
        return (
          <ul>
            {params.row.requeriment &&
              JSON.parse(params.row.requeriment).map((req: any) => (
                <li>{req}</li>
              ))}
          </ul>
        );
      },
    },
    {
      field: "price",
      headerName: "Costo $ ",
      width: 130,
      renderCell: (params) => {
        return <>{params.row.price !== null && <> $ {params.row.price}</>}</>;
      },
    },
    { field: "date", headerName: "Fecha de Publicación", width: 150 },
    { field: "user", headerName: "Subido Por", width: 300 },
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
              onClick={() => onClickUpdate(params.row.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              aria-label="edit-task"
              onClick={() =>
                onClickDelete(params.row.id, params.row.description)
              }
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClickView = (id: number, title: string) => {
    dispatch(
      openModal({
        modalName: "addTaskPics",
        modalProps: { taskId: id, title: title },
      })
    );
  };

  const onClickDelete = (id: number, description: string) => {
    dispatch(
      openModal({
        modalName: "deleteResources",
        modalProps: { id: id, description: description },
      })
    );
  };

  useEffect(() => {
    if (resourcesStatus === "idle") {
      dispatch(getResources());
    }
  }, [dispatch]);

  useEffect(() => {
    if (resources.length > 0) {
      setResourcesTableInfo(
        resources.map((resource) => {
          return {
            id: resource.id,
            area: resource.area,
            description: resource.description,
            requeriment: resource.requeriment,
            date: resource.date,
            user: resource.user,
            price: resource.price,
          };
        })
      );
    } else {
      setResourcesTableInfo([]);
    }
  }, [resources]);

  return (
    <Table
      columns={columns}
      rows={resourcesTableInfo ? resourcesTableInfo : []}
    />
  );
}
