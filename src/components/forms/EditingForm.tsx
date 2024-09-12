import {
  InputContainer,
  NameInput,
  DescriptionInput,
  Buttons,
  SaveButton,
  CancelButton,
} from "../../styles/style";

interface EditingFormProps {
  editedName: string;
  setEditedName: (name: string) => void;
  editedDescription: string;
  setEditedDescription: (description: string) => void;
  handleEditSubmit: () => void;
  handleEditCancel: () => void;
  boucketType: string;
}

export function EditingForm({
  editedName,
  setEditedName,
  editedDescription,
  setEditedDescription,
  handleEditSubmit,
  handleEditCancel,
  boucketType,
}: EditingFormProps): JSX.Element {
  return (
    <InputContainer>
      <NameInput
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
        placeholder={`Edit ${boucketType} name`}
      />
      <DescriptionInput
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        placeholder={`Edit ${boucketType} description`}
      />
      <Buttons>
        <SaveButton onClick={handleEditSubmit}>Save</SaveButton>
        <CancelButton onClick={handleEditCancel}>Cancel</CancelButton>
      </Buttons>
    </InputContainer>
  );
}
