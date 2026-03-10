import { FieldLayout } from "./FieldLayout";
import PropTypes from "prop-types";

export const Field = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  setIsDraw,
  isGameEnded,
  setIsGameEnded,
  WIN_PATTERNS,
  winInd,
  setWinInd,
}) => {
  const isArraysEqual = (winArr, testArr) => {
    let isArraysEqual = false;
    const cellSet = new Set();

    for (const itemOfWinArr of winArr) {
      if (!testArr.includes(itemOfWinArr)) return;
      else {
        cellSet.add(itemOfWinArr);
        isArraysEqual = true;
      }
    }
    setWinInd([...cellSet]);
    return isArraysEqual;
  };

  const isWin = (arr, currentPlayer) => {
    let isWinCheck = false;

    const winIndexes = arr
      .map((el, i) => (el === currentPlayer ? i : -1))
      .filter((v) => v !== -1);

    for (const winArr of WIN_PATTERNS) {
      if (isArraysEqual(winArr, winIndexes)) {
        isWinCheck = true;
      }
    }
    return isWinCheck;
  };

  const handleGameClick = (ind) => {
    let changedField = [...field];
    changedField[ind] = currentPlayer;
    setField(changedField);
    const isWinCheck = isWin(changedField, currentPlayer);
    if (isWinCheck) {
      setIsGameEnded(true);
    } else if (
      changedField.every((item) => {
        return item !== "";
      })
    ) {
      setIsDraw(true);
    } else {
      currentPlayer === "X" ? setCurrentPlayer("0") : setCurrentPlayer("X");
    }
  };

  return (
    <FieldLayout
      field={field}
      handleGameClick={handleGameClick}
      isGameEnded={isGameEnded}
      winInd={winInd}
    />
  );
};

Field.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
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
