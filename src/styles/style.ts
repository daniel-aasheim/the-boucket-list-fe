import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-color: #121212;
  }
  `;

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #121212;
  background-color: red;
  color: #e0e0e0;
`;

export const Dashboard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  > div {
    flex: 1;
    margin: 0 10px;
  }
`;

export const Paper = styled.div`
  padding: 2em;
  text-align: center;
  color: #e0e0e0;
`;

export const Card = styled.div`
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  margin: 0 10px;
  background-color: #1e1e1e;
  color: #e0e0e0;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.li<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#333" : "transparent")};
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #444;
  cursor: pointer;
  color: #e0e0e0;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  background-color: #ff6666;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: #e53935;
  }

    &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  background-color: #ff6666;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: #e53935;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: right;
`;

export const EditButton = styled.button`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  background-color: #ffeb3b;
  border: none;
  cursor: pointer;
  color: black;
  border-radius: 4px;

  &:hover {
    background-color: #fdd835;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #444;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #2e2e2e;
  color: #e0e0e0;
  font-family: "Courier New", Courier, monospace;

  &:disabled {
    background-color: #9e9e9e;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #444;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
  background-color: #2e2e2e;
  color: #e0e0e0;
  font-family: "Courier New", Courier, monospace;

  &:disabled {
    background-color: #9e9e9e;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const ListOrItemRows = styled.div`
  margin-top: 24px;
`;

export const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #e0e0e0;
`;

export const NameAndDescription = styled.div`
  text-align: left;
  color: #e0e0e0;

  // & > strong {
  //   display: block;
  //   font-weight: bold;
  // }

  // & > div {
  //   margin-top: 5px;
  }
`;
