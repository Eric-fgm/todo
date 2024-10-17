import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { Task, CreateTask, UpdateTask } from "shared/types";
import { useListId } from "../hooks";
import { request, API_BASE } from "../utils";

export const getTasks = async (listId: number) => {
  return await request<Task[]>(`${API_BASE}/lists/${listId}/tasks`);
};

export const createTask = async (listId: number, body: CreateTask) => {
  return await request<Task>(`${API_BASE}/lists/${listId}/tasks`, {
    method: "POST",
    body,
  });
};

export const updateTask = async (
  listId: number,
  taskId: number,
  body: UpdateTask,
) => {
  return await request(`${API_BASE}/lists/${listId}/tasks/${taskId}`, {
    method: "PUT",
    body,
  });
};

export const deleteTask = async (listId: number, taskId: number) => {
  return await request(`${API_BASE}/lists/${listId}/tasks/${taskId}`, {
    method: "DELETE",
  });
};

export const useTasksQuery = () => {
  const listId = useListId();

  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [`lists/${listId}/tasks`],
    queryFn: () => getTasks(listId),
  });

  return { tasks: data, ...restQuery };
};

export const useCreateTask = () => {
  const listId = useListId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTask) => createTask(listId, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`lists/${listId}/tasks`] }),
  });
};

export const useUpdateTask = () => {
  const listId = useListId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: UpdateTask & { id: number }) =>
      updateTask(listId, id, body),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`lists/${listId}/tasks`] }),
  });
};

export const useDeleteTask = () => {
  const listId = useListId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: number) => deleteTask(listId, taskId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [`lists/${listId}/tasks`] }),
  });
};
