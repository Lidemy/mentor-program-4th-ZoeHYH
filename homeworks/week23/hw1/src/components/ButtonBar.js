import { useDispatch } from "react-redux";
import Filter from "./Filter";
import { Button } from "react-bootstrap";
import { todoDeleteDone, todoSave } from "../redux/actionCreators";
import { BUTTON_TEXT } from "../constants/text";

export default function ButtonBar() {
  const dispatch = useDispatch();
  const handleTodoSave = () => dispatch(todoSave());
  const handleTodoDeleteDone = () => dispatch(todoDeleteDone());
  return (
    <div className="container d-flex justify-content-between fixed-bottom py-3 bg-white">
      <Button variant="outline-info" onClick={handleTodoSave}>
        {BUTTON_TEXT.save}
      </Button>
      <Filter />
      <Button variant="danger" onClick={handleTodoDeleteDone}>
        {BUTTON_TEXT.deleteDone}
      </Button>
    </div>
  );
}
