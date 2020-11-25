import { useState, useRef } from "react";

export default function useTodos(LOCAL_STORAGE_KEY) {
  const id = useRef(1);
  const [todos, setTodos] = useState(() => {
    let todoData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todoData && todoData !== "" && todoData !== "[]") {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id;
    } else {
      todoData = [];
    }
    return todoData;
  });
  const [select, setSelect] = useState("all");
  const [error, setError] = useState("");
  let doneCount = todos.filter((todo) => todo.done).length;
  let count = [todos.length, doneCount, todos.length - doneCount];
  const handleTodoAdd = (todo) => {
    setTodos([{ id: id.current, ...todo }, ...todos]);
    id.current++;
  };
  const handleTodoDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, done: !todo.done };
      })
    );
  };
  const handleTodoEdit = (id, content) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, content };
      })
    );
  };
  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleTodoDeleteDone = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };
  const handleTodoSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  };
  const handleSelect = (value) => {
    setSelect(value);
  };
  const handleError = (value) => {
    setError(value);
  };
  return {
    todos,
    select,
    count,
    error,
    handleTodoAdd,
    handleTodoDone,
    handleTodoEdit,
    handleTodoDelete,
    handleTodoDeleteDone,
    handleTodoSave,
    handleSelect,
    handleError,
  };
}
