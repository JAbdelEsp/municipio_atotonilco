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
    section: string
  ) => void;
}

type SevacTableInfo = {
  id: string;
  year: string;
  section: string;
  financial_states: string;
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
    { field: "section", headerName: "Sección", width: 150 },
    {
      field: "financial_states",
      headerName: "Estados Financieros",
      width: 150,
    },
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
                params.row.section
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
                params.row.section
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
                params.row.section
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
                params.row.section
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
            section: sevac.section,
            financial_states: sevac.financial_states,
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
