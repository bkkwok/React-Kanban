import { ADD_COLUMN, DEL_COLUMN } from "../actions/types";
import omit from "lodash.omit";

const defaultState = {
  '0': {
    id: 0,
    name: "inProgress",
    tasks: []
  },
  '1': {
    id: 1,
    name: "ToDo",
    tasks: []
  }
}

export default function columns(state = defaultState, action) {
  switch (action.type) {
    case ADD_COLUMN:
      return { ...state, [action.column.id]: { ...action.column } };
    case DEL_COLUMN:
      return omit(state, action.id);
    default:
      return state;
  }
}

export const getColumn = (state, id) => {
  return state.columns[id];
}