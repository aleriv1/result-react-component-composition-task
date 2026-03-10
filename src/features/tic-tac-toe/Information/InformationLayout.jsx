import styles from "./InformationLayout.module.scss";
import PropTypes from "prop-types";

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

InfromationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
