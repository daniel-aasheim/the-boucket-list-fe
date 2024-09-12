import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BoucketItem } from "../types/types";
import { createItem, deleteItem, updateItem } from "../api/itemsEndpoint";
import { fetchList } from "../api/listsEndpoint";

export function useCurrentBoucketItems(listId: number | null) {
  const queryClient = useQueryClient();

  const { data: items, isLoading } = useQuery<BoucketItem[], Error>({
    queryFn: () => fetchList({ id: listId }).then((list) => list.boucketItems),
    queryKey: ["current-items", listId],
    enabled: listId !== null,
  });

  function invalidateListsAndItems(): void {
    queryClient.invalidateQueries({ queryKey: ["lists"] });
    queryClient.invalidateQueries({ queryKey: ["current-items"] });
  }

  const { mutateAsync: createItemAsync } = useMutation({
    mutationFn: createItem,
    onSuccess: invalidateListsAndItems,
  });

  const { mutateAsync: updateItemAsync } = useMutation({
    mutationFn: updateItem,
    onSuccess: invalidateListsAndItems,
  });

  const { mutateAsync: deleteItemAsync } = useMutation({
    mutationFn: deleteItem,
    onSuccess: invalidateListsAndItems,
  });

  return {
    items,
    isLoading,
    createItemAsync,
    updateItemAsync,
    deleteItemAsync,
  };
}
