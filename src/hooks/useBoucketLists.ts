import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BoucketList } from "../types/types";
import {
  createList,
  fetchAllLists,
  updateList,
  deleteList,
} from "../api/listsEndpoint";

export function useBoucketLists() {
  const queryClient = useQueryClient();

  const { data: lists, isLoading } = useQuery<BoucketList[], Error>({
    queryFn: fetchAllLists,
    queryKey: ["lists"],
  });

  function invalidateLists(): void {
    queryClient.invalidateQueries({ queryKey: ["lists"] });
  }

  const { mutateAsync: createListAsync } = useMutation({
    mutationFn: createList,
    onSuccess: invalidateLists,
  });

  const { mutateAsync: updateListAsync } = useMutation({
    mutationFn: updateList,
    onSuccess: invalidateLists,
  });

  const { mutateAsync: deleteListAsync } = useMutation({
    mutationFn: deleteList,
    onSuccess: invalidateLists,
  });

  return {
    lists,
    isLoading,
    createListAsync,
    updateListAsync,
    deleteListAsync,
  };
}
