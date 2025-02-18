import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import { getTextBanner } from "../../slices/bannerSlice";
interface TextBannerTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    section: string
  ) => void;
}

type TextBannerTableInfo = {
  id: string;
  text: string;
  user: string;
  date: string;
};

export default function TextBannerTable({
  onClickUpload,
}: TextBannerTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [textBannerTableInfo, setTextBannerTableInfo] = useState<
    TextBannerTableInfo[]
  >([]);
  const banner = useAppSelector((state) => state.textBanner.banner);
  const bannerStatus = useAppSelector((state) => state.textBanner.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deleteTextBanner",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "text",
      headerName: "Contenido",
      width: 600,
    },
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
      openModal({ modalName: "editTextBanner", modalProps: { params: params } })
    );
  };

  useEffect(() => {
    if (bannerStatus === "idle") {
      dispatch(getTextBanner());
    }
  }, [dispatch]);
  useEffect(() => {
    if (banner.length !== undefined) {
      setTextBannerTableInfo(
        banner.map((banner) => {
          return {
            id: banner.id,
            text: banner.text,
            user: banner.user,
            date: banner.date,
          };
        })
      );
    } else {
      setTextBannerTableInfo([]);
    }
  }, [banner]);

  return (
    <Table
      columns={columns}
      rows={textBannerTableInfo ? textBannerTableInfo : []}
    />
  );
}
