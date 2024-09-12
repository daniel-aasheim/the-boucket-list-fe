import {
  Buttons,
  DeleteButton,
  EditButton,
  NameAndDescription,
} from "../styles/style";
import { BoucketItem, BoucketList } from "../types/types";

interface RowHeaderProps {
  listOrItem: BoucketList | BoucketItem;
  handleEditListOrItem: (list: BoucketList | BoucketItem) => void;
  handleDeleteListOrItem: (list: BoucketList | BoucketItem) => void;
  hasItems?: boolean;
}

export function RowHeader({
  listOrItem: list,
  handleEditListOrItem,
  handleDeleteListOrItem,
  hasItems = false,
}: RowHeaderProps): JSX.Element {
  return (
    <>
      <NameAndDescription>
        <strong>{list.name}</strong>
        <div>{list.description}</div>
      </NameAndDescription>
      <Buttons>
        <EditButton
          onClick={(e) => {
            e.stopPropagation();
            handleEditListOrItem(list);
          }}
        >
          Edit
        </EditButton>
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteListOrItem(list);
          }}
          disabled={hasItems}
        >
          Delete
        </DeleteButton>
      </Buttons>
    </>
  );
}
