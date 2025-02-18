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
import { getSevac } from "../../slices/sevacSlice";
import { getPlanning } from "../../slices/planningSlice";

interface PlanningTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => void;
}

type PlanningTableInfo = {
  id: string;
  year: string;
  file_name: string;
  table: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string;
};

export default function PlanningTable({ onClickUpload }: PlanningTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [planningTableInfo, setPlanningTableInfo] = useState<
    PlanningTableInfo[]
  >([]);
  const planning = useAppSelector((state) => state.planning.planning);
  const planningStatus = useAppSelector((state) => state.planning.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({ modalName: "deletePlanning", modalProps: { params: params } })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "year", headerName: "Año", width: 150 },
    { field: "file_name", headerName: "Nombre del Archivo", width: 400 },
    { field: "table", headerName: "Tabla", width: 400 },
    {
      field: "firstTrimester",
      headerName: "Primer Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.firstTrimester !== null &&
          JSON.parse(params.row.firstTrimester).length > 0 ? (
          <ul style={{ listStyle: "none" }}>
            {JSON.parse(params.row.firstTrimester).map((item: any) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "firstTrimester",
                params.row.id,
                params.row.year,
                params.row.file_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "secondTrimester",
      headerName: "Segundo Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.secondTrimester !== null &&
          JSON.parse(params.row.secondTrimester).length > 0 ? (
          <ul style={{ listStyle: "none" }}>
            {JSON.parse(params.row.secondTrimester).map((item: any) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "secondTrimester",
                params.row.id,
                params.row.year,
                params.row.file_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "thirdTrimester",
      headerName: "Tercer Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.thirdTrimester !== null &&
          JSON.parse(params.row.thirdTrimester).length > 0 ? (
          <ul style={{ listStyle: "none" }}>
            {JSON.parse(params.row.thirdTrimester).map((item: any) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "thirdTrimester",
                params.row.id,
                params.row.year,
                params.row.file_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "fourthTrimester",
      headerName: "Cuarto Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.fourthTrimester !== null &&
          JSON.parse(params.row.fourthTrimester).length > 0 ? (
          <ul style={{ listStyle: "none" }}>
            {JSON.parse(params.row.fourthTrimester).map((item: any) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "fourthTrimester",
                params.row.id,
                params.row.year,
                params.row.file_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    { field: "user", headerName: "Subido por", width: 200 },
    { field: "date", headerName: "Fecha de Subida", width: 200 },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="primary"
              aria-label="edit-task"
              onClick={() => onClickEdit(params.row)}
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
      openModal({ modalName: "editPlanning", modalProps: { params: params } })
    );
  };

  useEffect(() => {
    if (planningStatus === "idle") {
      dispatch(getPlanning());
    }
  }, [dispatch]);
  useEffect(() => {
    if (planning.length !== undefined) {
      setPlanningTableInfo(
        planning.map((planning: any) => {
          return {
            id: planning.id,
            year: planning.year,
            file_name: planning.file_name,
            table: planning.table,
            firstTrimester: planning.firstTrimester,
            secondTrimester: planning.secondTrimester,
            thirdTrimester: planning.thirdTrimester,
            fourthTrimester: planning.fourthTrimester,
            user: planning.user,
            date: planning.date,
          };
        })
      );
    } else {
      setPlanningTableInfo([]);
    }
  }, [planning]);

  return (
    <Table
      columns={columns}
      rows={planningTableInfo ? planningTableInfo : []}
    />
  );
}
