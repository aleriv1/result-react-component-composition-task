import { InfromationLayout } from "./InformationLayout";

export const Infromation = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <InfromationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};
