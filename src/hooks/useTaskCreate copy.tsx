import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../components/TaskCard";
import { API } from "../configs/api";

async function CreateTasks(task: TaskDataTypes) {
  const { title, description, date, status } = task;
  return await API.post("/task", { title, description, date, status });
}
export function useTaskCreate() {
  const mutate = useMutation({
    mutationFn: CreateTasks,
    onSuccess: (res) => {
      if (res.status == 201) {
        alert("Tarefa criada com sucesso!");
      }
    },
    onError: (error) => {
      console.error(error);
      alert("Erro ao criar tarefa!!");
    },
  });

  return mutate;
}
