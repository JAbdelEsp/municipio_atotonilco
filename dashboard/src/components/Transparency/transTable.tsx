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
import { getTrans } from "../../slices/transSlice";

interface TransTableProps {
  onClickUpload: (id: string, year: string, article: string) => void;
}

type TransTableInfo = {
  id: string;
  article: string;
  year: string;
  fraction: string;
  firstTrimester: string;
  secondTrimester: string;
  thirdTrimester: string;
  fourthTrimester: string;
  user: string;
  date: string;
};

export default function TransTable({ onClickUpload }: TransTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [transTableInfo, setTransTableInfo] = useState<TransTableInfo[]>([]);

  const trans = useAppSelector((state) => state.trans.trans);
  const transStatus = useAppSelector((state) => state.trans.status);

  const onClickDelete = (id: number) => {
    dispatch(
      openModal({ modalName: "deleteTrans", modalProps: { transId: id } })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "article", headerName: "Articulo", width: 150 },
    { field: "year", headerName: "Año", width: 130 },
    { field: "fraction", headerName: "Fracción", width: 300 },
    {
      field: "firstTrimester",
      headerName: "Primer Trimestre",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return params.row.firstTrimester !== "" &&
          params.row.firstTrimester !== null ? (
          params.row.firstTrimester
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(params.row.id, params.row.year, params.row.article)
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
          params.row.secondTrimester
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(params.row.id, params.row.year, params.row.article)
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
          params.row.thirdTrimester
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(params.row.id, params.row.year, params.row.article)
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
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return params.row.fourthTrimester !== "" &&
          params.row.fourthTrimester !== null ? (
          params.row.fourthTrimester
        ) : (
          <IconButton
            color="warning"
            aria-label="edit-task"
            onClick={() =>
              onClickUpload(params.row.id, params.row.year, params.row.article)
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
              onClick={() => onClickDelete(params.row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClickEdit = (params: any) => {
    console.log(params);
    dispatch(
      openModal({ modalName: "editTrans", modalProps: { params: params } })
    );
  };

  useEffect(() => {
    if (transStatus === "idle") {
      dispatch(getTrans());
    }
  }, [dispatch]);

  useEffect(() => {
    setTransTableInfo(
      trans.map((trans) => {
        return {
          id: trans.id,
          article: trans.article,
          year: trans.year,
          fraction: trans.fraction,
          firstTrimester: trans.firstTrimester,
          secondTrimester: trans.secondTrimester,
          thirdTrimester: trans.thirdTrimester,
          fourthTrimester: trans.fourthTrimester,
          user: trans.user,
          date: trans.date,
        };
      })
    );
  }, [trans]);

  return (
    <Table columns={columns} rows={transTableInfo ? transTableInfo : []} />
  );
}
