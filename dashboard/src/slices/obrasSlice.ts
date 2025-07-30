import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";
import { BACKEND_BASE_URL } from "../constants";
import { closeModal } from "./modalSlice";

export type Project = {
  id: string;
  name: string;
};

export type Assignee = {
  id: string;
  name: string;
};

export type NewObras = {
  no_obra: string;
  nombre: string;
  contrato: string;
  date: string;
  convocatoria: string;
};

export type Obras = NewObras & {
  id: string;
  title: Project;
  assignee: Assignee;
};

// export type NewTask = Omit<Task, "id">;

export type NewObrasPayload = {
    no_obra: string;
    nombre: string;
    contrato: string;
    date: string;
    convocatoria: string;
};

export type UpdateTaskPayload = Omit<
  NewObrasPayload,
  "projectId" | "dashboardId"
>;

export type ObrasBasicInfo = NewObrasPayload & {
  id: string;
  title?: string;
};

export type NewObrasFinal = NewObras & {
  project: Project;
  assignee: Assignee;
};

// export interface Task {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type ObrasState = {
  obras: ObrasBasicInfo[];
  selectedObras: ObrasBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: ObrasState = {
  obras: [],
  selectedObras: undefined,
  status: "idle",
  error: null,
};

export const getObras = createAsyncThunk(
  "obras/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        BACKEND_BASE_URL + "obras/records"
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);


export const createObras = createAsyncThunk(
  "obras/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("obras/register", payload);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.message) {
        const errorResponse = error.message;
        return rejectWithValue(errorResponse);
      }
      throw error;
    }
  }
);

export const updateObras = createAsyncThunk(
  "obras/updateOne",
  async (obras: Obras, { rejectWithValue }) => {
    try {
      // const updateTaskPayload: UpdateTaskPayload = {
      //   name: task.name,
      //   description: task.description,
      //   priority: task.priority,
      //   status: task.status,
      //   assigneeId: task.assignee.id,
      // };
      // const response = await axiosInstance.patch(
      //   `/tasks/${task.id}`,
      //   updateTaskPayload
      // );
      // return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const deleteObras = createAsyncThunk(
  "obras/deleteOne",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        BACKEND_BASE_URL + `obras/delete/?id=${id.id}&title=${id.title}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

// export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
//   const response = await axios.get(`${backendBaseUrl}/tasks`);
//   return response.data;
// });

// export const getTask = createAsyncThunk(
//   "tasks/getTask",
//   async (taskId: number) => {
//     const response = await axios.get(`${backendBaseUrl}/tasks/${taskId}`);
//     return response.data;
//   }
// );

// export const addTask = createAsyncThunk(
//   "tasks/addTask",
//   async (task: NewTaskFinal) => {
//     const taskPayload: NewTaskPayload = {
//       projectId: task.project.id as number,
//       name: task.name,
//       description: task.description,
//       priority: task.priority,
//       status: task.status,
//       assigneeId: task.assignee.id as number,
//       dashboardId: 1,
//     };
//     const response = await axios.post(`${backendBaseUrl}/tasks`, taskPayload);
//     return response.data;
//   }
// );

// export const updateTask = createAsyncThunk(
//   "tasks/updateTask",
//   async (task: Task) => {
//     const updateTaskPayload: UpdateTaskPayload = {
//       name: task.name,
//       description: task.description,
//       priority: task.priority,
//       status: task.status,
//       assigneeId: task.assignee.id as number,
//     };
//     const response = await axios.patch(
//       `${backendBaseUrl}/tasks/${task.id}`,
//       updateTaskPayload
//     );
//     return response.data;
//   }
// );

// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId: number) => {
//     await axios.delete(`${backendBaseUrl}/tasks/${taskId}`);
//     return taskId;
//   }
// );

export const obrasSlice = createSlice({
  name: "obras",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getObras.fulfilled,
        (state, action: PayloadAction<ObrasBasicInfo[]>) => {
          state.status = "idle";
          state.obras = action.payload;
        }
      )
      .addCase(getObras.rejected, (state, action) => {
        state.status = "failed";
        state.obras = [];
        state.error = action.error.message || "Failed to fetch tasks.";
      })
      .addCase(getObras.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createObras.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createObras.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Failed to add task.";
      })
      .addCase(
        createObras.fulfilled,
        (state, action: PayloadAction<ObrasBasicInfo>) => {
          state.status = "idle";
          // state.tasks.push(action.payload);
        }
      )
      .addCase(updateObras.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // .addCase(
      //   updateTask.fulfilled,
      //   (state, action: PayloadAction<TaskBasicInfo>) => {
      //     state.status = "idle";
      //     const updatedTask = action.payload;
      //     const index = state.tasks.findIndex(
      //       (task) => task.id === updatedTask.id
      //     );
      //     if (index !== -1) {
      //       state.tasks[index] = updatedTask;
      //     }
      //   }
      // )
      .addCase(updateObras.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update task.";
      })
      .addCase(deleteObras.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteObras.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "idle";
        const entityId = action.payload;
        state.obras = state.obras.filter((obra) => obra.id !== entityId);
      })
      .addCase(deleteObras.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete task.";
      });
  },
});

export default obrasSlice.reducer;
