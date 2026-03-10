import { ResetGameButtonLayout } from "./ResetGameButtonLayout";

export const ResetGameButton = ({
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
  setField,
  currentStartPlayer,
  setCurrentStartPlayer,
  setWinInd,
}) => {
  const handleResetGame = () => {
    setField(["", "", "", "", "", "", "", "", ""]);
    setIsDraw(false);
    setIsGameEnded(false);
    setWinInd([]);
    if (currentStartPlayer === "X") {
      setCurrentPlayer("0");
      setCurrentStartPlayer("0");
    } else {
      setCurrentPlayer("X");
      setCurrentStartPlayer("X");
    }
  };

  return <ResetGameButtonLayout handleResetGame={handleResetGame} />;
};
