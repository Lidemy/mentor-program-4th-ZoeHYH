import { Container, Board, Square, Header, ScrollDiv } from "./style";
import { SIZE, LOCAL_STORAGE_KEY } from "../../constants/variable";
import useGame from "./useGame";
import { create2DArray } from "./util";
import ClickRegion from "./ClickRegion";
import Buttons from "./Buttons";
import FunctionsBlock from "./FunctionsBlock";

function Gobang() {
  const {
    record,
    step,
    turn,
    winner,
    input,
    handleRecordUpdate,
    handleRecordReturn,
    handleWinner,
    handleReturnOnClick,
    handleRecordSave,
    handleRecordCopy,
    handleRecordInput,
    handleInput,
  } = useGame(LOCAL_STORAGE_KEY, create2DArray, SIZE);
  return (
    <Container>
      <Header>
        <h1>五子棋</h1>
        <h2>{winner ? winner + "贏！" : "輸贏尚未分曉"}</h2>
        <ScrollDiv>
          <Buttons step={step} handleReturnOnClick={handleReturnOnClick} />
          <FunctionsBlock
            handleRecordInput={handleRecordInput}
            input={input}
            handleInput={handleInput}
            handleRecordSave={handleRecordSave}
            handleRecordCopy={handleRecordCopy}
            record={record}
            winner={winner}
            handleReturnOnClick={handleReturnOnClick}
          />
        </ScrollDiv>
      </Header>
      <Board>
        {create2DArray("id", SIZE - 1).map((row) =>
          row.map((id) => <Square key={id} />)
        )}
        <ClickRegion
          winner={winner}
          size={SIZE}
          state={record[record.length - 1]}
          turn={turn}
          handleRecordUpdate={handleRecordUpdate}
          handleRecordReturn={handleRecordReturn}
          handleWinner={handleWinner}
        />
      </Board>
    </Container>
  );
}

export default Gobang;
