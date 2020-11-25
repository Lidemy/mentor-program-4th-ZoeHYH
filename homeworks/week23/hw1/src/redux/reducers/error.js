import { ERROR_SET } from "../actionType";

const INITIAL_STATE = "";

export default function errorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ERROR_SET: {
      return action.payload.errorMessage;
    }
    default:
      return state;
  }
}
