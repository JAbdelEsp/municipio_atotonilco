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
import { getComptroller } from "../../slices/comptrollerSlice";

interface ComptrollerTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => void;
}

type ComptrollerTableInfo = {
  id: string;
  year: string;
  file_name: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string;
};

export default function PlanningTable({
  onClickUpload,
}: ComptrollerTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [comptrollerTableInfo, setComptrollerTableInfo] = useState<
    ComptrollerTableInfo[]
  >([]);
  const comptroller = useAppSelector((state) => state.comptroller.comptroller);
  const comptrollerStatus = useAppSelector((state) => state.comptroller.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deleteComptroller",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "year", headerName: "Año", width: 150 },
    { field: "file_name", headerName: "Nombre del Archivo", width: 400 },
    {
      field: "firstTrimester",
      headerName: "Primer Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        console.log(params.row.id);
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
    if (comptrollerStatus === "idle") {
      dispatch(getComptroller());
    }
  }, [dispatch]);
  useEffect(() => {
    if (comptroller.length !== undefined) {
      setComptrollerTableInfo(
        comptroller.map((comptroller: any) => {
          return {
            id: comptroller.id,
            year: comptroller.year,
            file_name: comptroller.file_name,
            firstTrimester: comptroller.firstTrimester,
            secondTrimester: comptroller.secondTrimester,
            thirdTrimester: comptroller.thirdTrimester,
            fourthTrimester: comptroller.fourthTrimester,
            user: comptroller.user,
            date: comptroller.date,
          };
        })
      );
    } else {
      setComptrollerTableInfo([]);
    }
  }, [comptroller]);

  return (
    <Table
      columns={columns}
      rows={comptrollerTableInfo ? comptrollerTableInfo : []}
    />
  );
}
