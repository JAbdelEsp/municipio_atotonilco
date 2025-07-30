import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";
import {
  getBanner,
  getTextBanner,
  getVideo,
  getDirections,
} from "../../slices/bannerSlice";
interface DirectionsTableProps {
  onClickUpload: (
    trimester: string,
    id: string,
    year: string,
    section: string
  ) => void;
}

type DirectionsTableInfo = {
  id: string;
  name: string;
  lastname: string;
  area: string;
  description: string;
  picture: string;
};

export default function DirectionsTable({
  onClickUpload,
}: DirectionsTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [DirectionsTableInfo, setDirectionsTableInfo] = useState<
    DirectionsTableInfo[]
  >([]);
  const direction = useAppSelector((state) => state.textBanner.directions);
  const bannerStatus = useAppSelector((state) => state.textBanner.status);
  const onClickDelete = (params: any) => {
    dispatch(
      openModal({
        modalName: "deleteDirections",
        modalProps: { params: params },
      })
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
    },
    {
      field: "middle_name",
      headerName: "*",
      width: 200,
    },
    {
      field: "lastname",
      headerName: "Apellidos",
      width: 200,
    },
    {
      field: "area",
      headerName: "Dirección",
      width: 200,
    },
    {
      field: "description",
      headerName: "Descripción",
      width: 200,
    },
    {
      field: "picture",
      headerName: "Imágen",
      width: 200,
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
      dispatch(getDirections());
    }
  }, [dispatch]);
  useEffect(() => {
    if (direction.length > 0) {
      setDirectionsTableInfo(
        direction.map((item) => {
          return {
            id: item.id,
            name: item.name,
            lastname: item.lastname,
            area: item.area,
            description: item.description,
            picture: item.picture,
          };
        })
      );
    } else {
      setDirectionsTableInfo([]);
    }
  }, [direction]);

  return (
    <Table
      columns={columns}
      rows={DirectionsTableInfo ? DirectionsTableInfo : []}
    />
  );
}
