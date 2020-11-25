import { Button } from "./style";
import PropTypes from "prop-types";

export default function Buttons({ step, handleReturnOnClick }) {
  let steps = new Array(step);
  for (let i = 0; i < step; i++) {
    steps[i] = i;
  }
  return (
    <div>
      <h3>回到黑子步數</h3>
      {steps.map((number) => {
        if (number === 0 || number % 2 === 1) return "";
        return (
          <Button
            key={number}
            className={"black"}
            value={number}
            onClick={handleReturnOnClick}
          >
            {number}
          </Button>
        );
      })}
      <h3>回到白子步數</h3>
      {steps.map((number) => {
        if (number % 2 === 0) return "";
        return (
          <Button
            key={number}
            className={"white"}
            value={number}
            onClick={handleReturnOnClick}
          >
            {number}
          </Button>
        );
      })}
    </div>
  );
}

Buttons.propTypes = {
  step: PropTypes.number,
  handleReturnOnClick: PropTypes.func,
};
