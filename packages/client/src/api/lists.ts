import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import type { List, CreateList, UpdateList } from "shared/types";
import { useListId } from "../hooks";
import { request, API_BASE } from "../utils";

export const getLists = async () => {
  return await request<List[]>(`${API_BASE}/lists`);
};

export const createList = async (body: CreateList) => {
  return await request<List>(`${API_BASE}/lists`, {
    method: "POST",
    body,
  });
};

export const updateList = async (id: number, body: UpdateList) => {
  return await request(`${API_BASE}/lists/${id}`, {
    method: "PUT",
    body,
  });
};

export const deleteList = async (id: number) => {
  return await request(`${API_BASE}/lists/${id}`, {
    method: "DELETE",
  });
};

export const useListsQuery = () => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: ["lists"],
    queryFn: getLists,
  });

  return { lists: data, ...restQuery };
};

export const useListQuery = () => {
  const listId = useListId();
  const { lists } = useListsQuery();

  return lists?.data.find((list) => list.id === listId);
};

export const useCreateList = (
  options?: UseMutationOptions<{ data: List }, Error, CreateList>,
) => {
  const queryClient = useQueryClient();

  return useMutation<{ data: List }, Error, CreateList>({
    ...options,
    mutationFn: createList,
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({ queryKey: ["lists"] });
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: UpdateList & { id: number }) =>
      updateList(id, body),
    onSuccess: async () =>
      queryClient.invalidateQueries({ queryKey: ["lists"] }),
  });
};

export const useDeleteList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteList,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["lists"] }),
  });
};
