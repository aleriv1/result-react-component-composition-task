import styles from "./FieldLayout.module.scss";

export const FieldLayout = ({ field }) => {
  return (
    <div className={styles["game-field"]}>
      {field.map((item, id) => {
        return (
          <div key={id} className={styles.square}>
            1
          </div>
        );
      })}
    </div>
  );
};
