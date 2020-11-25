import { createContext } from "react";
import {
  TITLE,
  EXPLANATION,
  FILTER_CONTENT,
  BUTTON_TEXT,
  LOCAL_STORAGE_KEY,
} from "../../constants/text";
import useTodos from "./useTodos";
import Todo from "./Todo";
import InputTodo from "./InputTodo";
import ButtonBar from "./ButtonBar";

export const FilterContext = createContext();

function TodoList() {
  const {
    todos,
    select,
    count,
    handleTodoAdd,
    handleTodoDone,
    handleTodoEdit,
    handleTodoDelete,
    handleTodoDeleteDone,
    handleTodoSave,
    handleSelect,
  } = useTodos(LOCAL_STORAGE_KEY);
  return (
    <div className="App container">
      <h1 className="my-3 text-secondary">{TITLE}</h1>
      <InputTodo
        handleTodoAdd={handleTodoAdd}
        explanation={EXPLANATION}
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

export default TodoList;
