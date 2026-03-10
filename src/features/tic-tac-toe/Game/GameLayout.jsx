import { Infromation } from "../Information/Information";
import { Field } from "../Field/Field";
import { ResetGameButton } from "../ResetGameButton/ResetGameButton";
import styles from "./GameLayout.module.scss";

export const GameLayout = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
  setField,
  WIN_PATTERNS,
  currentStartPlayer,
  setCurrentStartPlayer,
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
        {isGameEnded ? (
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
