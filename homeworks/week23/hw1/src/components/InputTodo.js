import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { EXPLANATION, BUTTON_TEXT } from "../constants/text";
import { todoAdd } from "../redux/actionCreators";

export default function InputTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState(EXPLANATION.normal);
  const handleInput = ({ target }) => setValue(target.value);
  const handleInputSubmit = () => {
    if (value === "") return setPlaceholder(EXPLANATION.empty);
    dispatch(todoAdd(value, false));
    setValue("");
    setPlaceholder(EXPLANATION.normal);
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
          {BUTTON_TEXT.add}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
