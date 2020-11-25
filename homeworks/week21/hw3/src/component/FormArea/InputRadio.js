import { LabelRadio, Input } from "./style";
import PropTypes from "prop-types";

export default function InputRadio({ name, radio, check, handleOnChange }) {
  return (
    <LabelRadio htmlFor={radio.name}>
      <Input
        type="radio"
        name={name}
        id={radio.name}
        value={radio.name}
        checked={check}
        onChange={handleOnChange}
      />
      {radio.text}
    </LabelRadio>
  );
}

InputRadio.propTypes = {
  name: PropTypes.string,
  radio: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
  }),
  check: PropTypes.bool,
  handleOnChange: PropTypes.func,
};
