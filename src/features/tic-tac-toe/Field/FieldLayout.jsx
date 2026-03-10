import styles from "./FieldLayout.module.scss";
import PropTypes from "prop-types";

export const FieldLayout = ({
  field,
  handleGameClick,
  isGameEnded,
  winInd,
}) => {
  return (
    <div className={styles["game-field"]}>
      {field.map((item, ind) => {
        return (
          <div
            key={ind}
            className={`${styles.square} ${winInd.includes(ind) && styles.winCell} ${isGameEnded && !winInd.includes(ind) && styles["square-not-win"]}`}
            onClick={() => {
              if (isGameEnded || field[ind]) return;
              handleGameClick(ind);
            }}
          >
            {field[ind]}
          </div>
        );
      })}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.array,
  isGameEnded: PropTypes.bool,
  winInd: PropTypes.array,
  handleGameClick: PropTypes.func,
};
