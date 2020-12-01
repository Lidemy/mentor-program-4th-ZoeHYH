import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { EXPLANATION, EMPTY_MESSAGE, BUTTON_TEXT } from "../constants/text";
import { errorSet, todoAdd } from "../redux/actionCreators";

export default function InputTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleInput = ({ target }) => setValue(target.value);
  const handleInputSubmit = () => {
    if (value === "") return dispatch(errorSet(EMPTY_MESSAGE));
    dispatch(todoAdd(value, false));
    setValue("");
  };
  return (
    <InputGroup className="my-3">
      <FormControl
        value={value}
        placeholder={EXPLANATION}
        onChange={handleInput}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={handleInputSubmit}>
          {BUTTON_TEXT.add}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
