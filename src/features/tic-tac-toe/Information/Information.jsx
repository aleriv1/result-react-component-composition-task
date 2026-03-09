import { InfromationLayout } from "./InformationLayout";

export const Infromation = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
}) => {
  return (
    <InfromationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};
