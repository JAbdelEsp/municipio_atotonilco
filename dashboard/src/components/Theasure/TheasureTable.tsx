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
import { getTheasure } from "../../slices/theasureSlice";

interface TheasureTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    table_name: string,
  ) => void;
}

type TheasureTableInfo = {
  id: string;
  year: string;
  description: string;
  table_name: string;
  first_trimester: string;
  second_trimester: string;
  third_trimester: string;
  fourth_trimester: string;
  user: string;
  upload_date: string;
  file: string;
};

export default function TheasureTable({ onClickUpload }: TheasureTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [theasureTableInfo, setTheasureTableInfo] = useState<
    TheasureTableInfo[]
  >([]);
  const theasure = useAppSelector((state) => state.theasure.theasure);
  const theasureStatus = useAppSelector((state) => state.planning.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({ modalName: "deletePlanning", modalProps: { params: params } })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "year", headerName: "Año", width: 150 },
    { field: "description", headerName: "Nombre del Archivo", width: 400 },
    { field: "table_name", headerName: "Tabla", width: 400 },
    { field: "file", headerName: "Archivo", width: 400,
        renderCell: (params) => {
        return params.row.file !== null &&
          params.row.file !== null ? (
          <ul style={{ listStyle: "none" }}>
            { params.row.file }
          </ul>
        ) : (
          params.row.table_name === "cuenta_publica" &&
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "file",
                params.row.id,
                params.row.year,
                params.row.table_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
     },
    {
      field: "first_trimester",
      headerName: "Primer Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.first_trimester !== null &&
          params.row.first_trimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            <li>{params.row.first_trimester}</li>
          </ul>
        ) : (
          (params.row.table_name === "informacion_trimestral" || params.row.table_name === "sevac") &&
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "first_trimester",
                params.row.id,
                params.row.year,
                params.row.table_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "second_trimester",
      headerName: "Segundo Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.second_trimester !== null &&
          params.row.second_trimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            <li>{params.row.second_trimester}</li>
          </ul>
        ) : (
          (params.row.table_name === "informacion_trimestral" || params.row.table_name === "sevac") &&
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "second_trimester",
                params.row.id,
                params.row.year,
                params.row.table_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "third_trimester",
      headerName: "Tercer Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.third_trimester !== null &&
          params.row.third_trimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            <li>{params.row.third_trimester}</li>
          </ul>
        ) : (
          (params.row.table_name === "informacion_trimestral" || params.row.table_name === "sevac") &&
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "third_trimester",
                params.row.id,
                params.row.year,
                params.row.table_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    {
      field: "fourth_trimester",
      headerName: "Cuarto Trimestre",
      width: 500,
      sortable: false,
      renderCell: (params) => {
        return params.row.fourth_trimester !== null &&
          params.row.fourth_trimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            <li>{params.row.fourth_trimester}</li>
          </ul>
        ) : (
          (params.row.table_name === "informacion_trimestral" || params.row.table_name === "sevac") &&
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(
                "fourth_trimester",
                params.row.id,
                params.row.year,
                params.row.table_name
              )
            }
          >
            <CloudUploadIcon />
          </IconButton>
        );
      },
    },
    { field: "user", headerName: "Subido por", width: 200 },
    { field: "upload_date", headerName: "Fecha de Subida", width: 200 },
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
    if (theasureStatus === "idle") {
      dispatch(getTheasure());
    }
  }, [dispatch]);
  useEffect(() => {
    if (theasure.length !== undefined) {
        console.log(theasure)
      setTheasureTableInfo(
        theasure.map((theasure: any) => {
          return {
            id: theasure.id,
            year: theasure.year,
            description: theasure.description,
            table_name: theasure.table_name,
            first_trimester: theasure.first_trimester,
            second_trimester: theasure.second_trimester,
            third_trimester: theasure.third_trimester,
            fourth_trimester: theasure.fourth_trimester,
            user: theasure.user,
            upload_date: theasure.upload_date,
            file: theasure.file
          };
        })
      );
    } else {
      setTheasureTableInfo([]);
    }
  }, [theasure]);

  return (
    <Table
      columns={columns}
      rows={theasureTableInfo ? theasureTableInfo : []}
    />
  );
}
