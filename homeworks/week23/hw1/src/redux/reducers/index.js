import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import error from "./error";

export default combineReducers({
  todosState: todos,
  filterState: filter,
  errorState: error,
});
