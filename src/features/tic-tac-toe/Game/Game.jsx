import { useState } from "react";
import { GameLayout } from "./GameLayout";

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentStartPlayer, setCurrentStartPlayer] = useState("X");
  const [winInd, setWinInd] = useState([]);

  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // console.log(isGameEnded);

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
      setField={setField}
      WIN_PATTERNS={WIN_PATTERNS}
      currentStartPlayer={currentStartPlayer}
      setCurrentStartPlayer={setCurrentStartPlayer}
      winInd={winInd}
      setWinInd={setWinInd}
    />
  );
};
