import { InfromationLayout } from "./InformationLayout";
import PropTypes from "prop-types";

export const Infromation = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <InfromationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};

Infromation.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
