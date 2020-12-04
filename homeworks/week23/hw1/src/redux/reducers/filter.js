import { FILTER_SET } from "../actionType";
import { FILTER_KEY } from "../../constants/variables";

const INITIAL_STATE = FILTER_KEY.all;

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_SET: {
      return action.payload.filterSelected;
    }
    default:
      return state;
  }
}
