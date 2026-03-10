import styles from "./InformationLayout.module.scss";

const InfromationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let message = "";
  if (isDraw) {
    message = "Ничья";
  } else if (!isDraw && isGameEnded) {
    message = `Победа: ${currentPlayer}-ка`;
  } else {
    message = `Ходит: ${currentPlayer}-к`;
  }

  return <h1 className={styles["game-title"]}>{message}</h1>;
};

export { InfromationLayout };
