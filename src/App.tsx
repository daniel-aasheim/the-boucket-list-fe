import "./App.css";
import { UnassignedBoucketItems } from "./components/cards/UnassignedBoucketItems";
import { AllBoucketLists } from "./components/cards/AllBoucketLists";
import { CurrentBoucketList } from "./components/cards/CurrentBoucketList";
import { useState } from "react";
import { Dashboard, GlobalStyle, Paper } from "./styles/style";
import { BoucketList } from "./types/types";

export function App(): JSX.Element {
  const [currentList, setCurrentList] = useState<BoucketList>();

  return (
    <>
      <GlobalStyle />
      <Paper>
        <h1>The Boucket List</h1>
        <h2> Dashboard </h2>
        <Dashboard>
          <AllBoucketLists currentList={currentList} setCurrentList={setCurrentList} />
          <CurrentBoucketList currentList={currentList} />
          <UnassignedBoucketItems />
        </Dashboard>
      </Paper>
    </>
  );
}
