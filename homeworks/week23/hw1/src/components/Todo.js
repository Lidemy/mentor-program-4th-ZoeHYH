import { InputGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { todoDone, todoEdit, todoDelete } from "../redux/actionCreators";
import { BUTTON_TEXT } from "../constants/text";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const handleDoneOnclick = () => dispatch(todoDone(todo.id));
  const handleInputEdit = (event) =>
    dispatch(todoEdit(todo.id, event.target.value));
  const handleDeleteOnclick = () => dispatch(todoDelete(todo.id));
  return (
    <InputGroup className="todo mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-info"
          active={todo.isDone}
          onClick={handleDoneOnclick}
        >
          {todo.isDone ? BUTTON_TEXT.done : BUTTON_TEXT.undone}
        </Button>
      </InputGroup.Prepend>
      <FormControl
        value={todo.content}
        disabled={todo.isDone}
        onChange={handleInputEdit}
      />
      <InputGroup.Append>
        <Button variant="outline-danger" onClick={handleDeleteOnclick}>
          {BUTTON_TEXT.delete}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }),
};
