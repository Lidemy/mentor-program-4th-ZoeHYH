import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputTodo({
  handleTodoAdd,
  handleError,
  explanation,
  emptyMessage,
  buttonAddText,
}) {
  const [value, setValue] = useState("");
  const handleInput = (event) => setValue(event.target.value);
  const handleInputSubmit = () => {
    if (value === "") return handleError(emptyMessage);
    handleTodoAdd({ content: value, done: false });
    setValue("");
  };
  return (
    <InputGroup className="my-3">
      <FormControl
        value={value}
        placeholder={explanation}
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
  handleError: PropTypes.func,
  explanation: PropTypes.string,
  emptyMessage: PropTypes.string,
  buttonAddText: PropTypes.string,
};
