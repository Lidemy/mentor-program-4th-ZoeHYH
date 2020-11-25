import {
  TODO_ADD,
  TODO_DONE,
  TODO_EDIT,
  TODO_DELETE,
  TODO_DELETE_DONE,
  TODO_SAVE,
} from "../actionType";
import { LOCAL_STORAGE_KEY } from "../../constants/variables";

let initialState = { todos: [] };
let stateData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (
  stateData &&
  stateData.indexOf("todos") !== -1 &&
  stateData.indexOf("[") !== -1
) {
  initialState = JSON.parse(stateData);
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD: {
      return {
        ...state,
        todos: [
          {
            id: state.todos[0] ? state.todos[0].id + 1 : 1,
            content: action.payload.content,
            isDone: action.payload.isDone,
          },
          ...state.todos,
        ],
      };
    }
    case TODO_DONE: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;
          return { ...todo, isDone: !todo.isDone };
        }),
      };
    }
    case TODO_EDIT: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;
          return { ...todo, content: action.payload.content };
        }),
      };
    }
    case TODO_DELETE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case TODO_DELETE_DONE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isDone),
      };
    }
    case TODO_SAVE: {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
}
