import { useMutation } from "@tanstack/react-query";
import type { IResponse } from "@/types/response.interface";
import type { IUpdateTask } from "@/types/updateTask.interface";

const updateTask = async (task: IUpdateTask) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks/update`, {
    method: "PATCH",
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

export function useUpdateTask() {
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error("Error updating task:", error);
    },
  });
}