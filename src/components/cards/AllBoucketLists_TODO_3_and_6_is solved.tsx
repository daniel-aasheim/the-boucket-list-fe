import { useEffect, useState } from "react";
import { Card, ListOrItemRows } from "../../styles/style";
import { BoucketList } from "../../types/types";
import { useBoucketLists } from "../../hooks/useBoucketLists";
import { CreationForm } from "../forms/CreationForm";
import { ListOrItemRow } from "../ListOrItemRow";
import {
  createList,
  deleteList,
  fetchAllLists,
  updateList,
} from "../../api/listsEndpoint";

/*
 * TODO 3: Implement the handler functions to use the new API functions, so that our Add, Edit, and Delete buttons work as expected.
 * (Proceed only if you have completed the refactoring in the previous steps 1-2)
 */

/*
 * TODO 6: Replace the useEffect() pattern with the hook we created using TanStack Query.
 * Involves replacing all functions that call the API endpoint functions directly, with the new async functions from the useBoucketLists hook.
 * I.e., createList, updateList, and deleteList, are swapped with createListAsync, updateListAsync, and deleteListAsync, respectively.
 * (Proceed only if you have completed the refactoring in the previous steps, 1-5).
 */

interface AllBoucketListsProps {
  currentList: BoucketList | undefined;
  setCurrentList: (currentList: BoucketList | undefined) => void;
}

export function AllBoucketLists({
  currentList,
  setCurrentList,
}: AllBoucketListsProps): JSX.Element {
  /*
   * TODO 6a: Uncomment the next line
   */
  const {
    lists,
    isLoading,
    createListAsync,
    updateListAsync,
    deleteListAsync,
  } = useBoucketLists();

  /*
   * TODO 6b: Comment out the next useState() and useEffect()
   * NB: Also remove any usage of setLists() in the handler functions you have implemented
   */
  // const [lists, setLists] = useState<BoucketList[]>([]);
  // useEffect(() => {
  //   fetchAllLists()
  //     .then((response) => setLists(response))
  //     .catch((error) => console.error("Failed to fetch lists:", error));
  // }, []);

  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");
  const [editingListId, setEditingListId] = useState<number | null>(null);
  const [editedListName, setEditedListName] = useState("");
  const [editedListDescription, setEditedListDescription] = useState("");

  /*
   * TODONT 3: handleEditList function has been implemented for you!
   */
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

  /*
   * TODO 3a: Implement handleEditList function
   */
  const handleEditList = (list: BoucketList) => {
    setEditingListId(list.id);
    setEditedListName(list.name);
    setEditedListDescription(list.description);
  };

  /*
   *TODO 3b: Implement handleEditSubmit function
   */
  const handleEditSubmit = async () => {
    if (editingListId !== null && editedListName.trim()) {
      try {
        const updatedList = await updateListAsync({
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

  /*
   * TODO 3c: Implement handleEditCancel function
   */
  const handleEditCancel = () => {
    setEditingListId(null);
    setEditedListName("");
    setEditedListDescription("");
  };

  /*
   *TODO 3d: Implement handleDeleteList function
   */
  const handleDeleteList = async (list: BoucketList) => {
    try {
      await deleteListAsync({ id: list.id });
    } catch (error) {
      console.error("Failed to delete list:", error);
    }
  };

  /*
   *TODO 3e: Implement handleListSelected function
   */
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
      {/*
       *TODO 6c: Uncomment the next line
       */}
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
