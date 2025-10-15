export interface ITask {
  title: string;
  description: string;
  status: "todo" | "inProgress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
}