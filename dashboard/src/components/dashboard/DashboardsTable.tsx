import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { getProcedures, proceduresSlice } from "../../slices/proceduresSlice";
interface DashboardsTableProps {
  onClickEdit: (id: string) => void;
}

// type DashboardsTableInfo = {
//   id: number;
//   name: string;
//   status: string;
//   priority: string;
//   projectLabel: string;
//   assigneeLabel: string;
// };

export default function DashboardsTable({ onClickEdit }: DashboardsTableProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const procedures = useAppSelector((state) => state.procedures.procedures);
  const proceduresStatus = useAppSelector((state) => state.procedures.status);

  useEffect(() => {
    if (proceduresStatus === "idle") {
      dispatch(getProcedures());
    }
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "register_number", headerName: "Número de Registro", width: 200 },
    { field: "resource", headerName: "Tramite o Servicio", width: 400 },
    { field: "user_email", headerName: "Correo electrónico", width: 280 },
    {
      field: "files",
      headerName: "Documentos",
      width: 380,
      renderCell: (params) => {
        return (
          <>
            {params.row.files !== undefined &&
              JSON.parse(params.row.files).map((item: string, key: number) => (
                <IconButton
                  color="info"
                  aria-label="view-dashboard"
                  onClick={() => {
                    onClickView(params.row.id);
                  }}
                >
                  <WysiwygIcon />
                </IconButton>
              ))}
          </>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="info"
              aria-label="view-dashboard"
              onClick={() => {
                onClickView(params.row.id);
              }}
            >
              <WysiwygIcon />
            </IconButton>
            <IconButton
              color="warning"
              aria-label="edit-dashboard"
              onClick={() => onClickEdit(params.row.id)}
            >
              <EditIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClickView = (id: number) => {
    navigate(`/dashboards/${id}`);
  };

  useEffect(() => {
    if (proceduresStatus === "idle") {
      dispatch(getProcedures());
    }
  }, [dispatch]);

  const onClickDashboard = (id: string | number) => {
    console.error("Clicked on dashboard id: " + id);
  };

  return (
    <Table columns={columns} rows={procedures} onClickRow={onClickDashboard} />
  );
}
