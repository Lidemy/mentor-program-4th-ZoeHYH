import { useSelector } from "react-redux";
import { selectTodos } from "./redux/selectors";
import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";
import ButtonBar from "./components/ButtonBar";
import { TITLE } from "./constants/text";

export default function TodoList() {
  const todos = useSelector(selectTodos);
  return (
    <div className="container">
      <h1 className="my-3 text-secondary">{TITLE}</h1>
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
