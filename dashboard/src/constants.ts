export const BACKEND_BASE_URL = "https://k753lncj-6000.usw3.devtunnels.ms";
// PROD_URL: "http://191.101.15.147:9000";
export type ErrorResponse = {
  message: string;
};

export enum Roles {
  Editor = "Editor",
  Admin = "ADMIN",
}

// export enum MessageType {
//   Success = "success",
//   Error = "error",
//   Warning = "warning",
//   Info = "info",
// }

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  Inherit = "inherit",
}

export enum Status {
  ToDo = "TODO",
  InProgress = "IN PROGRESS",
  InQA = "IN QA",
  Done = "DONE",
}

export enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Highest = "HIGHEST",
}

export enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export const TASK_STATUS_LIST = [
  Status.ToDo,
  Status.InProgress,
  Status.InQA,
  Status.Done,
];

export const PRIORITY_LIST = [
  Priority.Low,
  Priority.Medium,
  Priority.High,
  Priority.Highest,
];

export const STATUS_LIST = [Status.Active, Status.Inactive];
