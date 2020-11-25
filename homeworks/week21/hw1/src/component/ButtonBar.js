import Filter from "./Filter";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ButtonBar({
  handleTodoSave,
  handleTodoDeleteDone,
  buttonSaveText,
  buttonDeleteDoneText,
}) {
  return (
    <div className="container d-flex justify-content-between fixed-bottom py-3 bg-white">
      <Button variant="outline-info" onClick={handleTodoSave}>
        {buttonSaveText}
      </Button>
      <Filter />
      <Button variant="danger" onClick={handleTodoDeleteDone}>
        {buttonDeleteDoneText}
      </Button>
    </div>
  );
}

ButtonBar.propTypes = {
  handleTodoSave: PropTypes.func,
  handleTodoDeleteDone: PropTypes.func,
  buttonSaveText: PropTypes.string,
  buttonDeleteDoneText: PropTypes.string,
};
