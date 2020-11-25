import { useSelector } from "react-redux";
import { selectTodos } from "./redux/selectors";
import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";
import ButtonBar from "./components/ButtonBar";
import { TITLE } from "./constants/text";
import ErrorMessage from "./components/ErrorMessage";

export default function TodoList() {
  const todos = useSelector(selectTodos);
  return (
    <div className="container">
      <h1 className="my-3 text-secondary">{TITLE}</h1>
      <ErrorMessage />
      <InputTodo />
      <div>
        {todos.length
          ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
          : ""}
      </div>
      <ButtonBar />
    </div>
  );
}
