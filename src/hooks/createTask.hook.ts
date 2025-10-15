import { useMutation } from "@tanstack/react-query";
import type { ITask } from "@/types/task.interface";

const createTask = async (task: ITask) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Network response error");
  }
  return response.json();
};

export function useCreateTask() {
  return useMutation({
    mutationFn: createTask,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error("Error creating task:", error);
    },
  });
}