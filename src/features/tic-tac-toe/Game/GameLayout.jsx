import { Infromation } from "../Information/Information";
import { Field } from "../Field/Field";
import { ResetGameButton } from "../ResetGameButton/ResetGameButton";
import styles from "./GameLayout.module.scss";
import PropTypes from "prop-types";

export const GameLayout = ({
  currentPlayer,
  setCurrentPlayer,
  currentStartPlayer,
  setCurrentStartPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  field,
  setField,
  WIN_PATTERNS,
  winInd,
  setWinInd,
}) => {
  return (
    <>
      <div className={styles["game-contaner"]}>
        <Infromation
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
        />
        <Field
          field={field}
          setField={setField}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          WIN_PATTERNS={WIN_PATTERNS}
          winInd={winInd}
          setWinInd={setWinInd}
        />
        {isGameEnded || isDraw ? (
          <ResetGameButton
            setCurrentPlayer={setCurrentPlayer}
            setIsGameEnded={setIsGameEnded}
            setIsDraw={setIsDraw}
            setField={setField}
            currentStartPlayer={currentStartPlayer}
            setCurrentStartPlayer={setCurrentStartPlayer}
            setWinInd={setWinInd}
          />
        ) : null}
      </div>
    </>
  );
};

GameLayout.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  currentStartPlayer: PropTypes.string,
  setCurrentStartPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,
  field: PropTypes.array,
  setField: PropTypes.func,
  WIN_PATTERNS: PropTypes.array,
  winInd: PropTypes.array,
  setWinInd: PropTypes.func,
};
