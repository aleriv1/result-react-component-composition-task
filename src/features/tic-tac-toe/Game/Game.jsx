import { useState } from "react";
import { GameLayout } from "./GameLayout";

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

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
    />
  );
};
