import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BoucketItem } from "../types/types";
import {
  createItem,
  deleteItem,
  fetchAllItems,
  updateItem,
} from "../api/itemsEndpoint";

export function useUnassignedBoucketItems() {
  const queryClient = useQueryClient();

  const { data: items, isLoading } = useQuery<BoucketItem[], Error>({
    queryFn: () =>
      fetchAllItems().then((items) =>
        items.filter((item) => item.boucketListId === null)
      ),
    queryKey: ["unassigned-items"],
  });

  function invalidateItems(): void {
    queryClient.invalidateQueries({ queryKey: ["unassigned-items"] });
  }

  const { mutateAsync: createItemAsync } = useMutation({
    mutationFn: createItem,
    onSuccess: invalidateItems,
  });

  const { mutateAsync: updateItemAsync } = useMutation({
    mutationFn: updateItem,
    onSuccess: invalidateItems,
  });

  const { mutateAsync: deleteItemAsync } = useMutation({
    mutationFn: deleteItem,
    onSuccess: invalidateItems,
  });

  return {
    items,
    isLoading,
    createItemAsync,
    updateItemAsync,
    deleteItemAsync,
  };
}
