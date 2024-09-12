import {
  InputContainer,
  NameInput,
  DescriptionInput,
  AddButton,
} from "../../styles/style";

interface CreationFormProps {
  newListOrItemName: string;
  setNewListOrItemName: (name: string) => void;
  newListOrItemDescription: string;
  setNewListOrItemDescription: (description: string) => void;
  handleAddListOrItem: () => void;
  type: string;
  isDisabled: boolean;
}

export function CreationForm({
  newListOrItemName,
  setNewListOrItemName,
  newListOrItemDescription,
  setNewListOrItemDescription,
  handleAddListOrItem,
  type,
  isDisabled,
}: CreationFormProps): JSX.Element {
  return (
    <InputContainer>
      <NameInput
        type="text"
        value={newListOrItemName}
        onChange={(e) => setNewListOrItemName(e.target.value)}
        placeholder={`New ${type} name (required)`}
        disabled={isDisabled}
      />
      <DescriptionInput
        value={newListOrItemDescription}
        onChange={(e) => setNewListOrItemDescription(e.target.value)}
        placeholder={`New ${type} description ${type === "list" ? "(optional)" : "(required)"}`}
        disabled={isDisabled}
      />
      <AddButton onClick={handleAddListOrItem} disabled={isDisabled}>
        Add
      </AddButton>
    </InputContainer>
  );
}
