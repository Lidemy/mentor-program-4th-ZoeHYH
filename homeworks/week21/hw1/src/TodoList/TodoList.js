import { createContext } from "react";
import {
  TITLE,
  EXPLANATION,
  EMPTY_MESSAGE,
  FILTER_CONTENT,
  BUTTON_TEXT,
  LOCAL_STORAGE_KEY,
} from "../constants/text";
import useTodos from "./useTodos";
import ErrorMessage from "../component/ErrorMessage";
import Todo from "../component/Todo";
import InputTodo from "../component/InputTodo";
import ButtonBar from "../component/ButtonBar";

export const FilterContext = createContext();

export default function TodoList() {
  const {
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
  } = useTodos(LOCAL_STORAGE_KEY);
  return (
    <div className="container">
      <h1 className="my-3 text-secondary">{TITLE}</h1>
      {error !== "" ? (
        <ErrorMessage error={error} handleError={handleError} />
      ) : (
        ""
      )}
      <InputTodo
        handleTodoAdd={handleTodoAdd}
        handleError={handleError}
        explanation={EXPLANATION}
        emptyMessage={EMPTY_MESSAGE}
        buttonAddText={BUTTON_TEXT.add}
      />
      <div>
        {todos.map((todo) => {
          if (
            select === FILTER_CONTENT[0].value ||
            (select === FILTER_CONTENT[1].value) === todo.done
          ) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleTodoDone={handleTodoDone}
                handleTodoEdit={handleTodoEdit}
                handleTodoDelete={handleTodoDelete}
                buttonDoneText={BUTTON_TEXT.done}
                buttonUndoneText={BUTTON_TEXT.undone}
                buttonDeleteText={BUTTON_TEXT.delete}
              />
            );
          }
          return false;
        })}
      </div>
      <FilterContext.Provider
        value={[count, select, handleSelect, FILTER_CONTENT]}
      >
        <ButtonBar
          handleTodoSave={handleTodoSave}
          handleTodoDeleteDone={handleTodoDeleteDone}
          buttonSaveText={BUTTON_TEXT.save}
          buttonDeleteDoneText={BUTTON_TEXT.deleteDone}
        />
      </FilterContext.Provider>
    </div>
  );
}
