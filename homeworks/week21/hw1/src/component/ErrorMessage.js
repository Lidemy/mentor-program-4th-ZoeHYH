import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ErrorMessage({ error, handleError }) {
  const handleOnClose = () => handleError("");
  return (
    <Alert variant="danger" onClose={handleOnClose} dismissible>
      {error}
    </Alert>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  handleError: PropTypes.func,
};
