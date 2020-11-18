const STYLE = {
  stone: {
    white: "border: 1px solid black; background: white;",
    black: "background: black;",
  },
  color: {
    white: "#f2f2f2",
  },
  media: {
    md: "@media (max-width: 1119px)",
  },
};
const SIZE = 19;
const SPACER = 100 / (SIZE + 1);
const LOCAL_STORAGE_KEY = "gobang-history";
const LINE = [
  [0, 1],
  [1, 0],
  [1, -1],
  [1, 1],
];
export { STYLE, SIZE, SPACER, LOCAL_STORAGE_KEY, LINE };
