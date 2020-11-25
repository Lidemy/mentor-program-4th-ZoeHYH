import { LINE } from "../../constants/variable";
export const create2DArray = (content, rows, cols = rows) => {
  let result = [];
  for (let row = 0; row < rows; row++) {
    result.push([]);
    for (let col = 0; col < cols; col++) {
      result[row].push(content === "id" ? row * cols + col : content);
    }
  }
  return result;
};
export const figureRowCol = (id, length) => [
  Math.floor(Number(id) / Number(length)),
  Number(id) % Number(length),
];
const figureConnection = (count, state, start, move, turn, size, max = 5) => {
  let next = [start[0] + move[0], start[1] + move[1]];
  while (
    count < max &&
    -1 < next[0] &&
    next[0] < size &&
    -1 < next[1] &&
    next[1] < size
  ) {
    if (turn !== state[next[0]][next[1]]) break;
    count++;
    next = [next[0] + move[0], next[1] + move[1]];
  }
  return count;
};
export const win = (state, row, col, turn, size) => {
  return LINE.some((line) =>
    figureConnection(
      figureConnection(1, state, [row, col], line, turn, size),
      state,
      [row, col],
      line.map((move) => -move),
      turn
    ) >= 5
      ? true
      : false
  );
};
