import { useState } from "react";
import { Card, ListOrItemRows } from "../../styles/style";
import { useUnassignedBoucketItems } from "../../hooks/useUnassignedBoucketItems";
import { CreationForm } from "../forms/CreationForm";
import { BoucketItem } from "../../types/types";
import { ListOrItemRow } from "../ListOrItemRow";

export function UnassignedBoucketItems(): JSX.Element {
  const {
    items,
    isLoading,
    createItemAsync,
    updateItemAsync,
    deleteItemAsync,
  } = useUnassignedBoucketItems();

  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");

  const [editedItemId, setEditingItemId] = useState<number | null>(null);
  const [editedItemName, setEditedItemName] = useState("");
  const [editedItemDescription, setEditedItemDescription] = useState("");

  const handleAddItem = async () => {
    if (newItemName.trim() && newItemDescription.trim()) {
      try {
        await createItemAsync({
          name: newItemName,
          description: newItemDescription,
          boucketListId: null,
        });
        setNewItemName("");
        setNewItemDescription("");
      } catch (error) {
        console.error("Failed to add item:", error);
      }
    } else {
      alert("Both item name and description are required.");
    }
  };

  const handleEditItem = (item: BoucketItem) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
    setEditedItemDescription(item.description);
  };

  const handleEditSubmit = async () => {
    if (
      editedItemId !== null &&
      editedItemName.trim() &&
      editedItemDescription.trim()
    ) {
      try {
        await updateItemAsync({
          id: editedItemId,
          name: editedItemName,
          description: editedItemDescription,
          boucketListId: null,
        });
        setEditingItemId(null);
        setEditedItemName("");
        setEditedItemDescription("");
      } catch (error) {
        console.error("Failed to update item:", error);
      }
    } else {
      alert("Both item name and description are required to update the item.");
    }
  };

  const handleDeleteItem = async (item: BoucketItem) => {
    try {
      await deleteItemAsync({ id: item.id });
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleEditCancel = () => {
    setEditingItemId(null);
    setEditedItemName("");
    setEditedItemDescription("");
  };

  function message(): string {
    if (isLoading) return "Loading...";
    if (items && items.length === 0) return "No unassigned items.";
    return "";
  }

  return (
    <Card>
      <h2>Unassigned Boucket items</h2>
      <h3>{<>&nbsp;</>}</h3>
      <h4>Add an unassigned item</h4>
      <CreationForm
        newListOrItemName={newItemName}
        setNewListOrItemName={setNewItemName}
        newListOrItemDescription={newItemDescription}
        setNewListOrItemDescription={setNewItemDescription}
        handleAddListOrItem={handleAddItem}
        type="item"
        isDisabled={false}
      />
      <div>{message()}</div>
      <ListOrItemRows>
        {items
          ?.slice()
          .reverse()
          .map((item) => (
            <ListOrItemRow
              key={item.id}
              listOrItem={item}
              isEditing={editedItemId === item.id}
              handleEditListOrItem={(list) =>
                handleEditItem(list as BoucketItem)
              }
              handleDeleteListOrItem={(list) =>
                handleDeleteItem(list as BoucketItem)
              }
              editedName={editedItemName}
              setEditedName={setEditedItemName}
              editedDescription={editedItemDescription}
              setEditedDescription={setEditedItemDescription}
              handleEditSubmit={handleEditSubmit}
              handleEditCancel={handleEditCancel}
              boucketType="item"
            />
          ))}
      </ListOrItemRows>
    </Card>
  );
}
