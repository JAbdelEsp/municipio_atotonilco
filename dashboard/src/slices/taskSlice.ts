import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

export type Project = {
  id: string;
  name: string;
};

export type Assignee = {
  id: string;
  name: string;
};

export type NewTask = {
  id_news: string;
  title: string;
  author: string;
  content: string;
  date: string;
  views: string;
  time: string;
  image: string;
  neighborhood: string;
};

export type Task = NewTask & {
  id: string;
  title: Project;
  assignee: Assignee;
};

// export type NewTask = Omit<Task, "id">;

export type NewTaskPayload = {
  id_news: string;
  title: string;
  author: string;
  content: string;
  date: string;
  views: string;
  time: string;
  image: string;
  neighborhood: string; // TODO: Temp
};

export type UpdateTaskPayload = Omit<
  NewTaskPayload,
  "projectId" | "dashboardId"
>;

export type TaskBasicInfo = NewTaskPayload & {
  id: string;
  title?: string;
};

export type NewTaskFinal = NewTask & {
  project: Project;
  assignee: Assignee;
};

// export interface Task {
//     id: number
//     title: string
//     completed: boolean
//     userId: number
// }

type TasksState = {
  tasks: TaskBasicInfo[];
  selectedTask: TaskBasicInfo | undefined;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export const initialState: TasksState = {
  tasks: [],
  selectedTask: undefined,
  status: "idle",
  error: null,
};

export const getTasks = createAsyncThunk(
  "tasks/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "https://k753lncj-9000.usw3.devtunnels.ms/news/records"
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

export const getTask = createAsyncThunk(
  "tasks/getOne",
  async (taskId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/tasks/${taskId}`);
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

export const createTask = createAsyncThunk(
  "tasks/createOne",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "https://k753lncj-9000.usw3.devtunnels.ms/news/register",
        payload
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

export const uploadPics = createAsyncThunk(
  "tasks/pics",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "https://k753lncj-9000.usw3.devtunnels.ms/news/pictures",
        payload
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

export const updateTask = createAsyncThunk(
  "tasks/updateOne",
  async (task: Task, { rejectWithValue }) => {
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

export const deleteTask = createAsyncThunk(
  "tasks/deleteOne",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `https://k753lncj-9000.usw3.devtunnels.ms/news/delete/?id=${id.id}&title=${id.title}`
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

export const deletePictures = createAsyncThunk(
  "tasks/deleteOne",
  async (id_news: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `https://k753lncj-9000.usw3.devtunnels.ms/news/delete/?id_news=${id_news}`
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

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getTasks.fulfilled,
        (state, action: PayloadAction<TaskBasicInfo[]>) => {
          state.status = "idle";
          state.tasks = action.payload;
        }
      )
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "failed";
        state.tasks = [];
        state.error = action.error.message || "Failed to fetch tasks.";
      })

      .addCase(getTask.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getTask.fulfilled,
        (state, action: PayloadAction<TaskBasicInfo>) => {
          state.status = "idle";
          state.selectedTask = action.payload;
        }
      )
      .addCase(getTask.rejected, (state, action) => {
        state.status = "failed";
        state.selectedTask = undefined;
        state.error = action.error.message || "Failed to fetch tasks.";
      })

      .addCase(createTask.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // .addCase(
      //   createTask.fulfilled,
      //   (state, action: PayloadAction<TaskBasicInfo>) => {
      //     state.status = "idle";
      //     state.tasks.push(action.payload);
      //   }
      // )
      .addCase(createTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add task.";
      })

      .addCase(updateTask.pending, (state) => {
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
      .addCase(updateTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update task.";
      })

      .addCase(deleteTask.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "idle";
        const entityId = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== entityId);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete task.";
      });
  },
});

export default tasksSlice.reducer;
