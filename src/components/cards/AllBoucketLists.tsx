import { useState } from "react";
import { Card, ListOrItemRows } from "../../styles/style";
import { BoucketList } from "../../types/types";
import { useBoucketLists } from "../../hooks/useBoucketLists";
import { CreationForm } from "../forms/CreationForm";
import { ListOrItemRow } from "../ListOrItemRow";

interface AllBoucketListsProps {
  currentList?: BoucketList;
  setCurrentList: (currentList: BoucketList | undefined) => void;
}

export function AllBoucketLists({
  currentList,
  setCurrentList,
}: AllBoucketListsProps): JSX.Element {
  const {
    lists,
    isLoading,
    createListAsync,
    updateListAsync,
    deleteListAsync,
  } = useBoucketLists();

  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");

  const [editingListId, setEditingListId] = useState<number | null>(null);
  const [editedListName, setEditedListName] = useState("");
  const [editedListDescription, setEditedListDescription] = useState("");

  const handleAddList = async () => {
    try {
      const newList = await createListAsync({
        name: newListName,
        description: newListDescription,
      });
      setNewListName("");
      setNewListDescription("");
      setCurrentList(newList);
    } catch (error) {
      console.error("Failed to add list:", error);
    }
  };

  const handleEditList = (list: BoucketList) => {
    setEditingListId(list.id);
    setEditedListName(list.name);
    setEditedListDescription(list.description);
  };

  const handleEditSubmit = async () => {
    if (editingListId !== null && editedListName.trim()) {
      try {
        await updateListAsync({
          id: editingListId,
          name: editedListName,
          description: editedListDescription,
        });
        setEditingListId(null);
        setEditedListName("");
        setEditedListDescription("");
      } catch (error) {
        console.error("Failed to update list:", error);
      }
    } else {
      alert("A name is required to update the list.");
    }
  };

  const handleEditCancel = () => {
    setEditingListId(null);
    setEditedListName("");
    setEditedListDescription("");
  };

  const handleDeleteList = async (list: BoucketList) => {
    try {
      await deleteListAsync({ id: list.id });
      if (currentList?.id === list.id) {
        setCurrentList(undefined);
      }
    } catch (error) {
      console.error("Failed to delete list:", error);
    }
  };

  const handleListSelected = (list: BoucketList) => {
    setCurrentList(list);
  };

  return (
    <Card>
      <h2>All Boucket lists</h2>
      <h3>{<>&nbsp;</>}</h3>
      <h4>Add a new list</h4>
      <CreationForm
        newListOrItemName={newListName}
        setNewListOrItemName={setNewListName}
        newListOrItemDescription={newListDescription}
        setNewListOrItemDescription={setNewListDescription}
        handleAddListOrItem={handleAddList}
        type="list"
        isDisabled={false}
      />
      {isLoading && <div>Loading...</div>}
      <ListOrItemRows>
        {lists
          ?.slice()
          .reverse()
          .map((list: BoucketList) => (
            <ListOrItemRow
              key={list.id} 
              isListRowSelected={currentList?.id === list.id}
              handleListRowSelected={handleListSelected}
              listOrItem={list}
              isEditing={editingListId === list.id}
              handleEditListOrItem={(list) =>
                handleEditList(list as BoucketList)
              }
              handleDeleteListOrItem={(list) =>
                handleDeleteList(list as BoucketList)
              }
              hasItems={list.boucketItems.length > 0}
              editedName={editedListName}
              setEditedName={setEditedListName}
              editedDescription={editedListDescription}
              setEditedDescription={setEditedListDescription}
              handleEditSubmit={handleEditSubmit}
              handleEditCancel={handleEditCancel}
              boucketType="list"
            ></ListOrItemRow>
          ))}
      </ListOrItemRows>
    </Card>
  );
}
