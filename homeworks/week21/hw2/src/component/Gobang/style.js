import styled from "styled-components";
import { STYLE, SPACER } from "../../constants/variable";
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  ${STYLE.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;
const Board = styled.div`
  position: relative;
  width: 100vmin;
  height: 100vmin;
  padding: ${SPACER}vmin;
  background: ${STYLE.color.white};
  font-size: 0;
  line-height: 0;
`;
const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: ${SPACER}vmin;
  height: ${SPACER}vmin;
`;
const Region = styled(Board)`
  position: absolute;
  top: ${SPACER / 2}%;
  right: ${SPACER / 2}%;
  width: ${100 - SPACER}%;
  height: ${100 - SPACER}%;
  padding: 0;
  background: transparent;
`;
const Block = styled(Square)`
  border: none;
  border-radius: 50%;
  ${({ $content, turn }) =>
    $content
      ? STYLE.stone.white
      : $content === false
      ? STYLE.stone.black
      : turn
      ? "&:hover{" + STYLE.stone.white + "}"
      : "&:hover{" + STYLE.stone.black + "}"}
`;
const Header = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  & h1,
  & h2,
  & h3 {
    margin: 5px 0;
  }
  ${STYLE.media.md} {
    width: 100vmin;
    text-align: center;
  }
`;
const ScrollDiv = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: scroll;
`;
const Button = styled.button`
  display: inline-block;
  outline: none;
  border: 1px solid white;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  margin: 5px 0px;
  &.white {
    background: ${STYLE.color.white};
  }
  &.white:hover {
    border: 1px solid black;
  }
  &.black {
    color: ${STYLE.color.white};
    background: black;
  }
  &.black:hover {
    color: black;
    background: ${STYLE.color.white};
  }
  &.wide {
    width: 50%;
  }
  &.block {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  margin: 5px 0;
  & textarea {
    width: 50%;
    border: 1px solid black;
    outline: none;
    font-size: 20px;
  }
  & input[type="submit"] {
    border: 1px solid black;
    height: 100%;
    margin: 0;
  }
  & input[type="submit"]:hover {
    border: 1px solid ${STYLE.color.white};
  }
`;
const Copy = styled.input`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 2em;
  height: 2em;
  padding: 0;
  box-shadow: none;
  opacity: 0;
`;

export {
  Container,
  Board,
  Square,
  Region,
  Block,
  Header,
  ScrollDiv,
  Button,
  Form,
  Copy,
};
