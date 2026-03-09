import { Infromation } from "../Information/Information";
import { Field } from "../Field/Field";
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
}) => {
  return (
    <>
      <div className={styles["game-contaner"]}>
        <Infromation
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
          setCurrentPlayer={setCurrentPlayer}
          setIsGameEnded={setIsGameEnded}
          setIsDraw={setIsDraw}
        />
        <Field field={field} setField={setField} />
      </div>
    </>
  );
};
