import { Row, RowContent } from "../styles/style";
import { BoucketItem, BoucketList } from "../types/types";
import { EditingForm } from "./forms/EditingForm";
import { RowHeader } from "./RowHeader";

interface ListOrItemRowProps {
  isListRowSelected?: boolean;
  handleListRowSelected?: (list: BoucketList) => void;
  listOrItem: BoucketList | BoucketItem;
  isEditing: boolean;
  handleEditListOrItem: (list: BoucketList | BoucketItem) => void;
  handleDeleteListOrItem: (list: BoucketList | BoucketItem) => void;
  hasItems?: boolean;
  editedName: string;
  setEditedName: (name: string) => void;
  editedDescription: string;
  setEditedDescription: (description: string) => void;
  handleEditSubmit: () => void;
  handleEditCancel: () => void;
  boucketType: string;
}

export function ListOrItemRow({
  isListRowSelected,
  handleListRowSelected,
  listOrItem,
  isEditing,
  handleEditListOrItem,
  handleDeleteListOrItem,
  hasItems,
  editedName: editedListName,
  setEditedName,
  editedDescription,
  setEditedDescription,
  handleEditSubmit,
  handleEditCancel,
  boucketType,
}: ListOrItemRowProps): JSX.Element {
  return (
    <Row
      selected={isListRowSelected}
      onClick={
        handleListRowSelected
          ? () => handleListRowSelected(listOrItem as BoucketList)
          : undefined
      }
    >
      <RowContent>
        {!isEditing ? (
          <RowHeader
            listOrItem={listOrItem}
            handleEditListOrItem={handleEditListOrItem}
            handleDeleteListOrItem={handleDeleteListOrItem}
            hasItems={hasItems}
          ></RowHeader>
        ) : (
          <EditingForm
            editedName={editedListName}
            setEditedName={setEditedName}
            editedDescription={editedDescription}
            setEditedDescription={setEditedDescription}
            handleEditSubmit={handleEditSubmit}
            handleEditCancel={handleEditCancel}
            boucketType={boucketType}
          />
        )}
      </RowContent>
    </Row>
  );
}
