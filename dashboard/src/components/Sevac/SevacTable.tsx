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

interface SevacTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => void;
}

type SevacTableInfo = {
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

export default function SevacTable({ onClickUpload }: SevacTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sevacTableInfo, setSevacTableInfo] = useState<SevacTableInfo[]>([]);
  const sevac = useAppSelector((state) => state.sevac.sevac);
  const sevacStatus = useAppSelector((state) => state.sevac.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({ modalName: "deleteSevac", modalProps: { params: params } })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "year", headerName: "Año", width: 150 },
    { field: "file_name", headerName: "Nombre del Archivo", width: 400 },
    {
      field: "firstTrimester",
      headerName: "Primer Trimestre",
      width: 300,
      sortable: false,
      renderCell: (params) => {
        console.log(params);
        return params.row.firstTrimester !== "" &&
          params.row.firstTrimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            {params.row.firstTrimester.map((item: any) => (
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
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return params.row.secondTrimester !== "" &&
          params.row.secondTrimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            {params.row.secondTrimester.map((item: any) => (
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
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return params.row.thirdTrimester !== "" &&
          params.row.thirdTrimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            {params.row.thirdTrimester.map((item: any) => (
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
      width: 300,
      sortable: false,
      renderCell: (params) => {
        return params.row.fourthTrimester !== "" &&
          params.row.fourthTrimester !== null ? (
          <ul style={{ listStyle: "none" }}>
            {params.row.fourthTrimester.map((item: any) => (
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
      openModal({ modalName: "editTrans", modalProps: { params: params } })
    );
  };

  useEffect(() => {
    if (sevacStatus === "idle") {
      dispatch(getSevac());
    }
  }, [dispatch]);
  useEffect(() => {
    if (sevac.length !== undefined) {
      setSevacTableInfo(
        sevac.map((sevac) => {
          return {
            id: sevac.id,
            year: sevac.year,
            file_name: sevac.file_name,
            firstTrimester: sevac.firstTrimester,
            secondTrimester: sevac.secondTrimester,
            thirdTrimester: sevac.thirdTrimester,
            fourthTrimester: sevac.fourthTrimester,
            user: sevac.user,
            date: sevac.date,
          };
        })
      );
    } else {
      setSevacTableInfo([]);
    }
  }, [sevac]);

  return (
    <Table columns={columns} rows={sevacTableInfo ? sevacTableInfo : []} />
  );
}
