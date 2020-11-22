import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputTodo({
  handleTodoAdd,
  explanation,
  buttonAddText,
}) {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(explanation.normal);
  const handleInput = (event) => setValue(event.target.value);
  const handleInputSubmit = () => {
    if (value === "") return setPlaceholder(explanation.empty);
    handleTodoAdd({ content: value, done: false });
    setValue("");
    setPlaceholder(explanation.normal);
  };
  return (
    <InputGroup className="my-3">
      <FormControl
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={handleInputSubmit}>
          {buttonAddText}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

InputTodo.propTypes = {
  handleTodoAdd: PropTypes.func,
  explanation: PropTypes.shape({
    normal: PropTypes.string,
    empty: PropTypes.string,
  }),
  buttonAddText: PropTypes.string,
};
