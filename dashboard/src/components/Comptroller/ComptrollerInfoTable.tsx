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
import {
  getComptroller,
  getComptrollerPublicInfo,
} from "../../slices/comptrollerSlice";

interface ComptrollerTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    file_name: string
  ) => void;
}

type PublicTableInfo = {
  id: string;
  description: string;
  file: string;
  user: string;
  date: string;
};

export default function ComptrollerInfoTable({
  onClickUpload,
}: ComptrollerTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [publicTableInfo, setPublicTableInfo] = useState<PublicTableInfo[]>([]);
  const publicInfo = useAppSelector((state) => state.comptroller.publicInfo);
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
    { field: "description", headerName: "Descripción", width: 150 },
    {
      field: "file",
      headerName: "Archivo",
      width: 400,
    },
    { field: "user", headerName: "Subido Por", width: 400 },
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
      dispatch(getComptrollerPublicInfo());
    }
  }, [dispatch]);
  useEffect(() => {
    if (publicInfo.length !== undefined) {
      setPublicTableInfo(
        publicInfo.map((pub: any) => {
          return {
            id: pub.id,
            description: pub.description,
            file: pub.file,
            user: pub.user,
            date: pub.date,
          };
        })
      );
    } else {
      setPublicTableInfo([]);
    }
  }, [publicInfo]);
  return (
    <Table columns={columns} rows={publicTableInfo ? publicTableInfo : []} />
  );
}
