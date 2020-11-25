import { useState } from "react";

export default function useGame(localStorageKey, create2DArray, size) {
  const local = JSON.parse(localStorage.getItem(localStorageKey));
  const [record, setRecord] = useState(
    local ? local.record : [create2DArray("", size)]
  );
  const [step, setStep] = useState(record.length - 1);
  const [turn, setTurn] = useState(record.length % 2 === 0);
  const [winner, setWinner] = useState(local ? local.winner : false);
  const [input, setInput] = useState("");
  const handleRecordUpdate = (row, col) => {
    setRecord([
      ...record,
      record[record.length - 1].map((contents, rowIndex) => {
        if (rowIndex !== row) return contents;
        return contents.map((content, colIndex) => {
          if (colIndex !== col) return content;
          return turn;
        });
      }),
    ]);
    setStep(step + 1);
    setTurn(!turn);
  };
  const handleRecordReturn = (goal) => {
    setRecord(record.slice(0, goal + 1));
    setStep(goal);
    setTurn(goal % 2 === 0 ? false : true);
    setWinner(false);
  };
  const handleWinner = (turn) => setWinner(turn ? "白子" : "黑子");
  const handleReturnOnClick = ({ target }) =>
    handleRecordReturn(Number(target.value));
  const handleRecordSave = () =>
    localStorage.setItem(localStorageKey, JSON.stringify({ record, winner }));
  const handleRecordCopy = () => {
    const copy = document.querySelector("#copy");
    copy.focus();
    copy.select();
    try {
      const sucess = document.execCommand("copy");
      if (!sucess) alert("複製不成功");
    } catch (error) {
      alert("無法複製");
    }
  };
  const handleRecordInput = (event) => {
    const result = JSON.parse(input);
    setRecord(result.record);
    setStep(result.record.length - 1);
    setTurn(record.length % 2 ? true : false);
    setWinner(result.winner);
    setInput("");
    event.preventDefault();
  };
  const handleInput = ({ target }) => setInput(target.value);
  return {
    record,
    step,
    turn,
    winner,
    input,
    handleRecordUpdate,
    handleRecordReturn,
    handleWinner,
    handleReturnOnClick,
    handleRecordSave,
    handleRecordCopy,
    handleRecordInput,
    handleInput,
  };
}
