import { create2DArray, figureRowCol, win } from "./util";
import { Region, Block } from "./style";
import PropTypes from "prop-types";

export default function ClickRegion({
  winner,
  size,
  state,
  turn,
  handleRecordUpdate,
  handleWinner,
}) {
  const handleOnClick = ({ target }) => {
    const [row, col] = figureRowCol(target.id, size);
    if (state[row][col] !== "" || winner) return;
    if (win(state, row, col, turn, size)) handleWinner(turn);
    handleRecordUpdate(row, col);
  };
  return (
    <Region>
      {create2DArray("id", size).map((row) =>
        row.map((id) => {
          const [row, col] = figureRowCol(id, size);
          return (
            <Block
              key={id}
              id={id}
              $content={state[row][col]}
              turn={turn}
              onClick={handleOnClick}
            />
          );
        })
      )}
    </Region>
  );
}

ClickRegion.propTypes = {
  winner: PropTypes.bool,
  size: PropTypes.number,
  state: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf([true, false, ""]))
  ),
  turn: PropTypes.bool,
  handleRecordUpdate: PropTypes.func,
  handleWinner: PropTypes.func,
};
