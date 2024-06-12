import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../components/TaskCard";
import { API } from "../configs/api";

async function UpdateTasks(task: TaskDataTypes) {
  const { id, title, description, date, status } = task;
  return await API.put(`/task/${id}`, { title, description, date, status });
}
export function useTaskUpdate() {
  const mutate = useMutation({
    mutationFn: UpdateTasks,
    onSuccess: (res) => {
      if (res.status == 201) {
        alert("Tarefa atualizada com sucesso!");
      }
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao atualizar tarefa!!");
    },
  });

  return mutate;
}
