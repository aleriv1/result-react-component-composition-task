import { ResetGameButtonLayout } from "./ResetGameButtonLayout";
import PropTypes from "prop-types";

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

ResetGameButton.propTypes = {
  setCurrentPlayer: PropTypes.func,
  currentStartPlayer: PropTypes.string,
  setCurrentStartPlayer: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  setField: PropTypes.func,
  setWinInd: PropTypes.func,
};
