import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import { getBanner, getTextBanner, getVideo } from "../../slices/bannerSlice";
interface VideoTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    section: string
  ) => void;
}

type VideoTableInfo = {
  id: string;
  video: string;
  title: string;
  user: string;
  date: string;
};

export default function VideoTable({ onClickUpload }: VideoTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [VideoTableInfo, setVideoTableInfo] = useState<VideoTableInfo[]>([]);
  const video = useAppSelector((state) => state.textBanner.video);
  const bannerStatus = useAppSelector((state) => state.textBanner.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deleteVideo",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "video",
      headerName: "Video",
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
      dispatch(getVideo());
    }
  }, [dispatch]);
  useEffect(() => {
    if (video.length !== undefined) {
      setVideoTableInfo(
        video.map((video) => {
          return {
            id: video.id,
            video: video.video,
            title: video.title,
            user: video.user,
            date: video.date,
          };
        })
      );
    } else {
      setVideoTableInfo([]);
    }
  }, [video]);

  return (
    <Table columns={columns} rows={VideoTableInfo ? VideoTableInfo : []} />
  );
}
