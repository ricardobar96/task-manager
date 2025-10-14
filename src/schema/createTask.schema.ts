import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .max(150, { message: "Max 150 characters" }),
  dueDate: z.date({
    required_error: "Date required.",
  }),
  description: z.string().max(500, {
    message: "Max 500 characters.",
  }),
  status: z.enum(["todo", "inProgress", "completed"], {
    message: "Select a status",
  }),
  priority: z.enum(["low", "medium", "high"], {
    message: "Select a priority",
  }),
});