import { Infromation } from "./Information";
import { Field } from "./Field";

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
      <Infromation />;
      <Field />
    </>
  );
};
