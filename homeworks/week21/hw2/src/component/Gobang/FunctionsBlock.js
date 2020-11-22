import { Form, Button, Copy } from "./style";
import PropTypes from "prop-types";
export default function FunctionsBlock({
  handleRecordInput,
  input,
  handleInput,
  handleRecordSave,
  handleRecordCopy,
  record,
  winner,
  handleReturnOnClick,
}) {
  return (
    <div>
      <Form onSubmit={handleRecordInput}>
        <textarea
          rows="1"
          name="input"
          value={input}
          onChange={handleInput}
          placeholder="貼上複製的棋譜"
        />
        <Button as="input" className="black wide" type="submit" value="送出" />
      </Form>
      <Button className="white wide" onClick={handleRecordSave}>
        儲存棋局
      </Button>
      <Button className="white wide" onClick={handleRecordCopy}>
        複製棋譜
      </Button>
      <Copy id="copy" readOnly value={JSON.stringify({ record, winner })} />
      <Button className="black block" value={0} onClick={handleReturnOnClick}>
        再來一盤
      </Button>
    </div>
  );
}

FunctionsBlock.propTypes = {
  handleRecordInput: PropTypes.func,
  input: PropTypes.string,
  handleInput: PropTypes.func,
  handleRecordSave: PropTypes.func,
  handleRecordCopy: PropTypes.func,
  record: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf([true, false, ""])))
  ),
  winner: PropTypes.bool,
  handleReturnOnClick: PropTypes.func,
};
