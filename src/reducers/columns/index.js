import { ADD_COLUMN, DEL_COLUMN } from "../../actions/types";
import omit from "lodash.omit";

export default function columns(state = {}, action) {
  switch (action.type) {
    case ADD_COLUMN:
      return { ...state, [action.id]: { ...action.column } };
    case DEL_COLUMN:
      return omit(state, action.id);
    default:
      return state;
  }
}
