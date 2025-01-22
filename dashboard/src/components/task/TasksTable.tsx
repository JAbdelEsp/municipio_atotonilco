import { GridColDef } from "@mui/x-data-grid";
import Table from "../table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { getTasks } from "../../slices/taskSlice";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../slices/modalSlice";

interface TasksTableProps {
  onClickEdit: (id: string) => void;
}

type TasksTableInfo = {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  views: string;
  time: string;
  image: string;
};

export default function TasksTable({ onClickEdit }: TasksTableProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [tasksTableInfo, setTasksTableInfo] = useState<TasksTableInfo[]>([]);

  const tasks = useAppSelector((state) => state.tasks.tasks);
  const tasksStatus = useAppSelector((state) => state.tasks.status);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Titulo", width: 500 },
    { field: "author", headerName: "Autor", width: 130 },
    { field: "content", headerName: "Contenido", width: 400 },
    { field: "date", headerName: "Fecha de Publicación", width: 150 },
    { field: "views", headerName: "No de Vistas", width: 200 },
    { field: "time", headerName: "Tiempo de Lectura", width: 200 },
    { field: "image", headerName: "Imagen Principal", width: 200 },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              color="info"
              aria-label="view-task"
              onClick={() => {
                onClickView(params.row.id);
              }}
            >
              <AddPhotoAlternateIcon />
            </IconButton>
            <IconButton
              color="warning"
              aria-label="edit-task"
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
    dispatch(
      openModal({ modalName: "addTaskPics", modalProps: { taskId: id } })
    );
  };

  useEffect(() => {
    if (tasksStatus === "idle") {
      dispatch(getTasks());
    }
  }, [dispatch]);

  useEffect(() => {
    setTasksTableInfo(
      tasks.map((task) => {
        return {
          id: task.id,
          title: task.title,
          author: task.author,
          content: task.content,
          date: task.date,
          views: task.views,
          time: task.time,
          image: task.image,
        };
      })
    );
  }, [tasks]);

  return (
    <Table columns={columns} rows={tasksTableInfo ? tasksTableInfo : []} />
  );
}
