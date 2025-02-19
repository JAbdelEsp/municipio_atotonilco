import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import { getBanner, getTextBanner } from "../../slices/bannerSlice";
interface BannerTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    section: string
  ) => void;
}

type BannerTableInfo = {
  id: string;
  picture: string;
  title: string;
  user: string;
  date: string;
};

export default function BannerTable({ onClickUpload }: BannerTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [BannerTableInfo, setBannerTableInfo] = useState<BannerTableInfo[]>([]);
  const banner = useAppSelector((state) => state.textBanner.imageBanner);
  const bannerStatus = useAppSelector((state) => state.textBanner.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deleteBanner",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "picture",
      headerName: "Imágen",
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
      openModal({ modalName: "editBanner", modalProps: { params: params } })
    );
  };

  useEffect(() => {
    if (bannerStatus === "idle") {
      dispatch(getBanner());
    }
  }, [dispatch]);
  useEffect(() => {
    if (banner.length !== undefined) {
      setBannerTableInfo(
        banner.map((banner) => {
          return {
            id: banner.id,
            picture: banner.picture,
            title: banner.title,
            user: banner.user,
            date: banner.date,
          };
        })
      );
    } else {
      setBannerTableInfo([]);
    }
  }, [banner]);

  return (
    <Table columns={columns} rows={BannerTableInfo ? BannerTableInfo : []} />
  );
}
