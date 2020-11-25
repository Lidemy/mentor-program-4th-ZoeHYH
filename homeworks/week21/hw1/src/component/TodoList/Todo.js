import { InputGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Todo({
  todo,
  handleTodoDone,
  handleTodoEdit,
  handleTodoDelete,
  buttonDoneText,
  buttonUndoneText,
  buttonDeleteText,
}) {
  const handleDoneOnclick = () => handleTodoDone(todo.id);
  const handleDeleteOnclick = () => handleTodoDelete(todo.id);
  const handleInputEdit = (event) =>
    handleTodoEdit(todo.id, event.target.value);
  return (
    <InputGroup className="todo mb-3">
      <InputGroup.Prepend>
        <Button
          variant="outline-info"
          active={todo.done}
          onClick={handleDoneOnclick}
        >
          {todo.done ? buttonDoneText : buttonUndoneText}
        </Button>
      </InputGroup.Prepend>
      <FormControl
        value={todo.content}
        disabled={todo.done}
        onChange={handleInputEdit}
      />
      <InputGroup.Append>
        <Button variant="outline-danger" onClick={handleDeleteOnclick}>
          {buttonDeleteText}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    done: PropTypes.bool,
  }),
  handleTodoDone: PropTypes.func,
  handleTodoEdit: PropTypes.func,
  handleTodoDelete: PropTypes.func,
  buttonDoneText: PropTypes.string,
  buttonUndoneText: PropTypes.string,
  buttonDeleteText: PropTypes.string,
};
