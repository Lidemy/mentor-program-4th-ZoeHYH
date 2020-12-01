import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "../redux/selectors";
import { errorSet } from "../redux/actionCreators";

export default function ErrorMessage() {
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();
  const handleOnClose = () => dispatch(errorSet(""));
  if (errorMessage !== "")
    return (
      <Alert variant="danger" onClose={handleOnClose} dismissible>
        {errorMessage}
      </Alert>
    );
  return "";
}
