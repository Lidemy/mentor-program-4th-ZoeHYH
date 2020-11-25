import {
  TODO_ADD,
  TODO_DONE,
  TODO_EDIT,
  TODO_DELETE,
  TODO_DELETE_DONE,
  TODO_SAVE,
  FILTER_SET,
} from "./actionType";

export const todoAdd = (content, isDone) => ({
  type: TODO_ADD,
  payload: { content, isDone },
});

export const todoDone = (id) => ({
  type: TODO_DONE,
  payload: { id },
});

export const todoEdit = (id, content) => ({
  type: TODO_EDIT,
  payload: { id, content },
});

export const todoDelete = (id) => ({
  type: TODO_DELETE,
  payload: { id },
});

export const todoDeleteDone = () => ({
  type: TODO_DELETE_DONE,
});

export const todoSave = () => ({
  type: TODO_SAVE,
});

export const filterSet = (filterSelected) => ({
  type: FILTER_SET,
  payload: { filterSelected },
});
