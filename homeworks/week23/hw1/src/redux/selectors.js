import { FILTER_KEY } from "../constants/variables";

export const selectTodos = (state) => {
  switch (state.filterState) {
    case FILTER_KEY.ALL: {
      return state.todosState.todos;
    }
    case FILTER_KEY.DONE: {
      return state.todosState.todos.filter((todo) => todo.isDone);
    }
    case FILTER_KEY.UNDONE: {
      return state.todosState.todos.filter((todo) => !todo.isDone);
    }
    default:
      return state.todosState.todos;
  }
};

export const selectFilter = (state) => state.filterState;

export const selectCount = (state) => {
  const COUNT_ALL = state.todosState.todos.length;
  const COUNT_DONE = state.todosState.todos.filter((todo) => todo.isDone)
    .length;
  return { ALL: COUNT_ALL, DONE: COUNT_DONE, UNDONE: COUNT_ALL - COUNT_DONE };
};

export const selectError = (state) => state.errorState;
